const { google } = require('googleapis');
const fs = require('fs');

const credentials = JSON.parse(fs.readFileSync('./google-credentials.json'));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = '1Dl1DsbuZAiG6tvjexNN9FILD4YH-d9vr1TSL_WgR4V8';

async function setupSheets() {
  // Get current sheet info
  const metadata = await sheets.spreadsheets.get({ spreadsheetId });
  const sheet1 = metadata.data.sheets[0];
  
  const requests = [
    // Rename Sheet1 to Barbershops
    {
      updateSheetProperties: {
        properties: {
          sheetId: sheet1.properties.sheetId,
          title: 'Barbershops'
        },
        fields: 'title'
      }
    },
    // Add new sheet called Restaurants
    {
      addSheet: {
        properties: {
          title: 'Restaurants'
        }
      }
    }
  ];
  
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: { requests }
  });
  
  console.log('✅ Renamed Sheet1 to Barbershops');
  console.log('✅ Created Restaurants sheet');
}

setupSheets().catch(console.error);
