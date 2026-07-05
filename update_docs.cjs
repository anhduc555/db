const fs = require('fs');

const changelogEntry = `\n## [Unreleased] - 2026-07-05
### Fixed
- **UI Layout**: Relocated Practice Action Bar (Continue, Retry All, Retry Wrong) outside of the AI sidebar into the Practice Report screen.
- **AI Pipeline**: Rewrote aiGateway.js to safely handle API keys and simulate AI responses if no Gemini API key is configured. Fixed UI error catch blocks in AIController.js to render connection failure messages gracefully.
- **UX**: AI Context chips dynamically hide when switching tabs.
`;

fs.appendFileSync('CHANGELOG.md', changelogEntry);

let progress = fs.readFileSync('IMPLEMENTATION_PROGRESS.md', 'utf8');
progress += `\n- [x] Fixed Issue 1: Extracted Practice Action Bar from AI sidebar.\n- [x] Fixed Issue 2: Fixed AI Pipeline Network Error catch block and implemented robust Mock Responder in aiGateway.\n`;
fs.writeFileSync('IMPLEMENTATION_PROGRESS.md', progress);

console.log('Docs updated');
