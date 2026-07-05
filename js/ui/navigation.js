import { Store } from '../state/store.js';

export const Navigation = {
  init() {
    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        if (isDark) {
          document.body.classList.remove('dark-theme');
          document.body.classList.add('light-theme');
          localStorage.setItem('db_exam_prep_theme', 'light');
        } else {
          document.body.classList.remove('light-theme');
          document.body.classList.add('dark-theme');
          localStorage.setItem('db_exam_prep_theme', 'dark');
        }
      });
      
      const savedTheme = localStorage.getItem('db_exam_prep_theme');
      if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    }

    // Tabs
    const tabBtns = document.querySelectorAll('.nav-tab');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.id.replace('tab-', '');
        this.switchTab(id);
      });
    });
  },

  switchTab(tabId) {
    if (Store.mockTestState.isActive && !Store.mockTestState.isSubmitted && tabId !== 'mock') {
      alert('Vui lòng hoàn thành hoặc nộp bài thi thử trước khi chuyển tab khác!');
      return;
    }

    Store.activeTab = tabId;
    
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.mode-panel').forEach(p => p.classList.remove('active'));
    
    const tabElem = document.getElementById(`tab-${tabId}`);
    const panelElem = document.getElementById(`panel-${tabId}`);
    
    if (tabElem) tabElem.classList.add('active');
    if (panelElem) panelElem.classList.add('active');
    
    // Dispatch custom event to notify other modules
    window.dispatchEvent(new CustomEvent('tabChanged', { detail: { tabId } }));
  }
};
