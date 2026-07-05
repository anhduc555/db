const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  await page.goto('http://localhost:8080');
  
  // 1. Wait for Practice tab load
  await new Promise(r => setTimeout(r, 1000));
  console.log('✅ Page loaded');
  
  // 2. Click Option A
  console.log('Testing Option Click...');
  await page.evaluate(() => {
    const opts = document.querySelectorAll('.option-card');
    if (opts.length > 0) opts[0].click();
  });
  await new Promise(r => setTimeout(r, 1500));
  
  // 3. Test Navigation (Exam Mode)
  console.log('Testing Navigation...');
  await page.evaluate(() => {
    document.getElementById('nav-mock-test').click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  // 4. Return to Practice Mode
  await page.evaluate(() => {
    document.getElementById('nav-practice').click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  // 5. Test AI Sidebar & Modal
  console.log('Testing AI Sidebar...');
  await page.evaluate(() => {
    document.getElementById('practice-ai-btn').click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  await page.evaluate(() => {
    const configBtn = document.querySelector('.ai-config-btn');
    if(configBtn) configBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  await page.evaluate(() => {
    const input = document.getElementById('ai-api-key-input');
    if(input) input.value = 'dummy_key_for_test';
    const saveBtn = document.getElementById('save-ai-key-btn');
    if(saveBtn) saveBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  // 6. Test AI Prompt
  console.log('Sending AI Message...');
  await page.evaluate(() => {
    const input = document.getElementById('ai-chat-input');
    if(input) {
      input.value = 'Xin chào, giải thích cho tôi câu này nhé';
      document.getElementById('ai-send-btn').click();
    }
  });
  
  await new Promise(r => setTimeout(r, 4000));
  
  console.log('✅ End of test.');
  await browser.close();
})();
