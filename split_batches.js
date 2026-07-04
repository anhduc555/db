const fs = require('fs');
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf8'));

const batchSize = 35;
let batchIndex = 1;

for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize);
    fs.writeFileSync(`batch_${batchIndex}.json`, JSON.stringify(batch, null, 2));
    console.log(`Created batch_${batchIndex}.json with ${batch.length} questions.`);
    batchIndex++;
}
