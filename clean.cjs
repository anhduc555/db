const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/\s+on(click|submit|change|input)="[^"]*"/g, '');
html = html.replace('<script src="app.js"></script>', '<script type="module" src="js/app.js"></script>');
fs.writeFileSync('index.html', html);
console.log('Cleaned index.html');
