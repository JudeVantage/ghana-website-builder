#!/usr/bin/env node

/**
 * Simple Apify API Test
 */

require('dotenv').config();
const https = require('https');

const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN;
const ACTOR_ID = 'nwua9Gu5YrADL7ZDj';

console.log('🔍 Testing Apify API connection...\n');
console.log(`Actor ID: ${ACTOR_ID}`);
console.log(`Token: ${APIFY_API_TOKEN.substring(0, 20)}...`);
console.log('\n⏳ Sending request to Apify...\n');

const inputData = JSON.stringify({
  searchStringsArray: ['Barbershop in East Legon, Accra, Ghana'],
  maxCrawledPlacesPerSearch: 5, // Just 5 for testing
  language: 'en',
});

const options = {
  hostname: 'api.apify.com',
  port: 443,
  path: `/v2/acts/${ACTOR_ID}/run-sync-get-dataset-items?token=${APIFY_API_TOKEN}&timeout=120`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': inputData.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}\n`);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('✓ Response received\n');
    console.log('─'.repeat(80));
    
    try {
      const results = JSON.parse(data);
      
      if (Array.isArray(results)) {
        console.log(`\n✓ Found ${results.length} businesses\n`);
        
        if (results.length > 0) {
          console.log('First result sample:');
          console.log(JSON.stringify(results[0], null, 2));
        }
      } else {
        console.log('Response:');
        console.log(JSON.stringify(results, null, 2));
      }
    } catch (error) {
      console.log('Raw response (not JSON):');
      console.log(data);
    }
    
    console.log('\n' + '─'.repeat(80));
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error.message);
});

req.write(inputData);
req.end();
