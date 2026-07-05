import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// Fix the bad multi_replace
html = html.replace(
  /<div class="ai-suggestions" id="ai-suggestions">[\s\S]*?<\/div>[\s\S]*?<div class="report-actions">[\s\S]*?<\/div>/,
  '<div class="report-actions">\n          <button class="btn btn-primary" >Ôn tập tiếp</button>\n          <button class="btn btn-secondary" >Làm lại tất cả</button>\n          <button class="btn btn-secondary" >Làm lại câu sai</button>\n        </div>'
);

html = html.replace(
  /<div class="ai-input-area">/,
  '<div class="ai-suggestions" id="ai-suggestions">\n          <button class="ai-suggestion-btn">Giải thích câu này</button>\n          <button class="ai-suggestion-btn">Đưa ra câu tương tự</button>\n          <button class="ai-suggestion-btn">Gợi ý học tập</button>\n        </div>\n        <div class="ai-input-area">'
);

// Add missing IDs for the report actions
html = html.replace(
  '<button class="btn btn-primary" >Ôn tập tiếp</button>',
  '<button id="btn-practice-continue" class="btn btn-primary">Ôn tập tiếp</button>'
);
html = html.replace(
  '<button class="btn btn-secondary" >Làm lại tất cả</button>',
  '<button id="btn-practice-redo-all" class="btn btn-secondary">Làm lại tất cả</button>'
);
html = html.replace(
  '<button class="btn btn-secondary" >Làm lại câu sai</button>',
  '<button id="btn-practice-redo-wrong" class="btn btn-secondary">Làm lại câu sai</button>'
);

fs.writeFileSync('index.html', html);
console.log('Fixed index.html');
