const fs = require('fs');
const questions = require('./questions.json');
const progress = require('./user_progress.json');

let md = '# Incorrect Questions Analysis\n\n';
let count = 0;

for (const q of questions) {
    if (progress[q.id] && progress[q.id].isCorrect === false) {
        count++;
        md += `## Question ${q.id}\n`;
        md += `**Q:** ${q.question}\n\n`;
        md += `**Options:**\n`;
        q.options.forEach((opt, idx) => {
            const isUser = progress[q.id].answeredIndex === idx;
            const isCorrect = q.correctAnswer === idx;
            let marker = '- ';
            if (isCorrect) marker = '- [x] (Correct) ';
            else if (isUser) marker = '- [ ] (User Selected) ';
            
            md += `${marker}${opt}\n`;
        });
        md += `\n**Explanation:** ${q.explanation}\n\n`;
        md += `---\n\n`;
    }
}

console.log(`Total incorrect: ${count}`);
fs.writeFileSync('C:\\Users\\Anh Duc\\.gemini\\antigravity-ide\\brain\\8277efe7-afb5-48d5-a327-bf3221a878c6\\incorrect_questions.md', md);
