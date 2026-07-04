const fs = require('fs');

let allQuestions = [];

for (let i = 1; i <= 10; i++) {
  const batchData = JSON.parse(fs.readFileSync(`batch_${i}.json`, 'utf8'));
  allQuestions = allQuestions.concat(batchData);
}

fs.writeFileSync('questions.json', JSON.stringify(allQuestions, null, 2));
console.log('Successfully combined all 10 batches into questions.json.');
