#!/usr/bin/env node

/**
 * Export Leads to Google Sheets
 * Requires: npm install googleapis
 */

const { google } = require('googleapis');
const fs = require('fs');

// Load credentials
const credentials = JSON.parse(fs.readFileSync('google-credentials.json', 'utf8'));

// Get the spreadsheet ID from command line or env
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || process.argv[2];

if (!SPREADSHEET_ID) {
  console.error('❌ Error: No spreadsheet ID provided');
  console.log('\nUsage: node export-to-sheets.js <SPREADSHEET_ID>');
  console.log('Or set SPREADSHEET_ID in .env file\n');
  process.exit(1);
}

// Get the leads file
const leadsFile = process.argv[3] || fs.readdirSync('.').filter(f => f.startsWith('leads-') && f.endsWith('.json')).sort().pop();

if (!leadsFile) {
  console.error('❌ No leads file found');
  process.exit(1);
}

console.log(`\n📊 Exporting leads to Google Sheets\n`);
console.log(`📄 Leads file: ${leadsFile}`);
console.log(`📋 Spreadsheet ID: ${SPREADSHEET_ID}\n`);

// Load leads
const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));

console.log(`✓ Found ${leads.length} leads\n`);

// Set up Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

async function exportToSheets() {
  try {
    // Prepare headers
    const headers = [
      'Business Name',
      'Category',
      'Area',
      'Rating',
      'Reviews',
      'Phone',
      'Website',
      'Website Status',
      'Lead Score',
      'Priority',
      'Status',
      'Suggested Template',
      'Google Maps URL',
      'Contacted',
      'Response',
      'Notes'
    ];
    
    // Prepare rows
    const rows = leads.map(lead => [
      lead.businessName,
      lead.category,
      lead.area,
      lead.rating,
      lead.reviews,
      lead.phone,
      lead.website,
      lead.websiteStatus,
      lead.leadScore,
      lead.priority,
      lead.status,
      lead.suggestedTemplate,
      lead.googleMapsUrl,
      '', // Contacted - empty for now
      '', // Response - empty for now
      ''  // Notes - empty for now
    ]);
    
    // Combine headers and data
    const values = [headers, ...rows];
    
    console.log('⏳ Writing to Google Sheets...\n');
    
    // Clear existing data first
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A1:Z1000',
    });
    
    // Write new data
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A1',
      valueInputOption: 'RAW',
      resource: { values },
    });
    
    console.log('✓ Successfully exported to Google Sheets!');
    console.log(`✓ Updated ${response.data.updatedRows} rows\n`);
    
    // Format header row (make it bold)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      resource: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0,
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  textFormat: { bold: true },
                  backgroundColor: { red: 0.9, green: 0.9, blue: 0.9 },
                },
              },
              fields: 'userEnteredFormat(textFormat,backgroundColor)',
            },
          },
          {
            autoResizeDimensions: {
              dimensions: {
                sheetId: 0,
                dimension: 'COLUMNS',
                startIndex: 0,
                endIndex: 16,
              },
            },
          },
        ],
      },
    });
    
    console.log('✓ Formatted header row\n');
    console.log(`🔗 View your sheet: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.message.includes('403')) {
      console.log('\n⚠️  Permission denied. Make sure you:');
      console.log('1. Shared the spreadsheet with:');
      console.log(`   ${credentials.client_email}`);
      console.log('2. Gave it "Editor" permissions\n');
    }
    
    process.exit(1);
  }
}

exportToSheets();
