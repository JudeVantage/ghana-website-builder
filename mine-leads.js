#!/usr/bin/env node

/**
 * Lead Mining Script
 * Uses Apify Google Maps Scraper to find qualified business leads
 */

require('dotenv').config();
const https = require('https');

const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN;
const ACTOR_ID = 'nwua9Gu5YrADL7ZDj'; // Google Maps Scraper

if (!APIFY_API_TOKEN) {
  console.error('❌ APIFY_API_TOKEN not found in .env file');
  process.exit(1);
}

// Lead Mining Agent Qualification Rules
const QUALIFICATION_RULES = {
  MIN_RATING: 4.0,
  MIN_REVIEWS: 20,
};

// Helper: safely get number or 0
function safeNumber(val) {
  return typeof val === 'number' ? val : 0;
}

// Lead Scoring Model
function calculateLeadScore(business) {
  let score = 0;
  
  // +30 if no website
  if (!business.website || business.website.includes('instagram.com') || business.website.includes('facebook.com')) {
    score += 30;
  }
  
  // +20 if reviews > 100
  if (safeNumber(business.reviews) > 100) {
    score += 20;
  }
  
  // +10 if rating > 4.3
  if (safeNumber(business.rating) > 4.3) {
    score += 10;
  }
  
  // +10 if tourist-facing category (for now, just general bonus)
  score += 10;
  
  // +10 if phone exists
  if (business.phone) {
    score += 10;
  }
  
  // -30 if strong website (rough heuristic)
  if (business.website && !business.website.includes('instagram.com') && !business.website.includes('facebook.com')) {
    score -= 30;
  }
  
  return score;
}

// Classify website quality
function classifyWebsite(website) {
  if (!website) return 0; // No website
  if (website.includes('instagram.com') || website.includes('facebook.com')) return 1; // Social media only
  // For now, assume 3 (basic) if website exists but isn't social media
  return 3;
}

// Determine priority
function getPriority(score) {
  if (score >= 60) return 'A';
  if (score >= 40) return 'B';
  return 'C';
}

// Determine qualification status
function getQualificationStatus(business) {
  const rating = safeNumber(business.rating);
  const reviews = safeNumber(business.reviews);
  
  const meetsRating = rating >= QUALIFICATION_RULES.MIN_RATING;
  const meetsReviews = reviews >= QUALIFICATION_RULES.MIN_REVIEWS || reviews === 0; // If no review data, don't penalize
  const weakWebsite = classifyWebsite(business.website) <= 2;
  const hasContact = business.phone || business.website;
  
  // TARGET: Good rating, weak website, has contact
  if (meetsRating && weakWebsite && hasContact) {
    return 'TARGET';
  }
  
  // MAYBE: Decent rating OR has reviews but needs manual check
  if ((meetsRating || reviews > 10) && hasContact) {
    return 'MAYBE';
  }
  
  return 'SKIP';
}

// Process and qualify leads
function processLeads(results, category) {
  return results.map(business => {
    const processedBusiness = {
      rating: safeNumber(business.totalScore),
      reviews: safeNumber(business.reviewsCount),
      website: business.website || null,
      phone: business.phone || null,
    };
    
    const websiteStatus = classifyWebsite(processedBusiness.website);
    const leadScore = calculateLeadScore(processedBusiness);
    const priority = getPriority(leadScore);
    const status = getQualificationStatus(processedBusiness);
    
    return {
      businessName: business.title || 'N/A',
      category: category,
      area: business.address || business.neighborhood || 'N/A',
      rating: processedBusiness.rating,
      reviews: processedBusiness.reviews,
      phone: processedBusiness.phone || 'N/A',
      website: processedBusiness.website || 'None',
      websiteStatus: websiteStatus,
      leadScore: leadScore,
      priority: priority,
      status: status,
      googleMapsUrl: business.url || 'N/A',
      suggestedTemplate: 'Salon/Barber',
    };
  }).sort((a, b) => b.leadScore - a.leadScore);
  
  // For debugging: show all businesses, not just qualified
  // }).filter(lead => lead.status === 'TARGET' || lead.status === 'MAYBE')
}

// Format as table
function formatAsTable(leads) {
  console.log('\n📊 QUALIFIED LEADS\n');
  console.log('─'.repeat(120));
  console.log(
    'Business Name'.padEnd(25) +
    'Rating'.padEnd(8) +
    'Reviews'.padEnd(10) +
    'Phone'.padEnd(15) +
    'Website'.padEnd(10) +
    'Score'.padEnd(8) +
    'Priority'.padEnd(10) +
    'Status'
  );
  console.log('─'.repeat(120));
  
  leads.forEach(lead => {
    console.log(
      lead.businessName.substring(0, 24).padEnd(25) +
      String(lead.rating).padEnd(8) +
      String(lead.reviews).padEnd(10) +
      (lead.phone !== 'N/A' ? '✓' : '✗').padEnd(15) +
      (lead.website !== 'None' ? 'Yes' : 'No').padEnd(10) +
      String(lead.leadScore).padEnd(8) +
      lead.priority.padEnd(10) +
      lead.status
    );
  });
  
  console.log('─'.repeat(120));
  console.log(`\n✓ Found ${leads.length} qualified leads\n`);
}

// Run Apify actor
async function runApifyActor(searchQuery) {
  return new Promise((resolve, reject) => {
    const inputData = JSON.stringify({
      searchStringsArray: [searchQuery],
      maxCrawledPlacesPerSearch: 20,
      language: 'en',
    });
    
    const options = {
      hostname: 'api.apify.com',
      port: 443,
      path: `/v2/acts/${ACTOR_ID}/run-sync-get-dataset-items?token=${APIFY_API_TOKEN}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': inputData.length,
      },
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const results = JSON.parse(data);
          resolve(results);
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.write(inputData);
    req.end();
  });
}

// Main function
async function main() {
  const category = process.argv[2] || 'Barbershops';
  const location = process.argv[3] || 'East Legon, Accra';
  
  const searchQuery = `${category} in ${location}`;
  
  console.log(`\n🔍 Mining leads: ${searchQuery}\n`);
  console.log('⏳ Fetching data from Google Maps...\n');
  
  try {
    const results = await runApifyActor(searchQuery);
    
    if (!results || results.length === 0) {
      console.log('❌ No results found');
      return;
    }
    
    console.log(`✓ Found ${results.length} businesses`);
    console.log('⏳ Applying qualification rules...\n');
    
    const qualifiedLeads = processLeads(results, category);
    
    formatAsTable(qualifiedLeads);
    
    // Save to JSON file
    const fs = require('fs');
    const outputFile = `leads-${category.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.json`;
    fs.writeFileSync(outputFile, JSON.stringify(qualifiedLeads, null, 2));
    console.log(`💾 Saved to: ${outputFile}\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
