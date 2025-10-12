const fs = require('fs');
const path = require('path');

// This URL is known to be the current one for fetching servant data
const API_URL = 'https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json';
const OUTPUT_FILE = path.resolve(__dirname, 'src', 'servant-names.json');

async function generateServantsJson() {
  console.log('Starting to fetch data from the Atlas Academy API...');
  try {
    const { default: fetch } = await import('node-fetch');

    const response = await fetch(API_URL);
    
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`HTTP error! status: ${response.status}. Response: ${errorBody}`);
    }
    
    const data = await response.json();
    
    const formattedData = data.map(servant => ({
      id: servant.id,
      name: servant.name
    }));
    
    console.log(`Successfully fetched ${formattedData.length} servant entries.`);
    
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formattedData, null, 2));
    
    console.log(`JSON file successfully created at: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error generating JSON file:', error);
  }
}

generateServantsJson();
