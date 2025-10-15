const fs = require('fs');
const path = require('path');

const API_URL = 'https://api.atlasacademy.io/export/NA/nice_servant_lore.json'
const OUTPUT_FILE = path.resolve(_dirname, 'src', 'servant-skills.json')

async function fetchServantSkillsJSON() {

    console.log("Attempting to fetch data from Atlas Academy API...");

    try {

    const { default : fetch } = await import ('node-fetch')

    const response = await fetch(API_URL)

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Https request failed : ${errorBody}`);
    }

    const data = await response.json()

    const formattedData = data.map(servant => ({
            id: servant.id,
            collectionNo: servant.collectionNo,
            name: servant.name,
            classId: servant.classId,
            className: servant.className,
            bondEquip: servant.bondEquip,
            valentineEquip: servant.valentineEquip,
            valentineScript: servant.valentineScript,
            skills: servant.skills,
            classPassives: servant.classPassives,
            extraPassives: servant.extraPassives,
            appendPassives: servant.appendPassives,
            noblePhantasms: servant.noblePhantasms,
            profile: servant.profile,
    }));

    console.log(`successfully fetched ${formattedData.length} entries`)

    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(formattedData, null, 2));

    console.log(`JSON File successfully created at ${OUTPUT_FILE}`);

    } catch (error) {
        console.log(error)
    }
}

fetchServantSkillsJSON();