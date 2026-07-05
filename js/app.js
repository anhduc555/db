import { Store } from './state/store.js';
import { Navigation } from './ui/navigation.js';
import { PracticeUI } from './ui/practice.js';
import { MockUI } from './ui/mock.js';
import { BankUI } from './ui/bank.js';
import { ApiService } from './services/api.js';

// Global toast helper
window.showToast = function(message, type = 'success') {
  const toastElement = document.getElementById('toast');
  const toastMessageElement = document.getElementById('toast-message');
  if (!toastElement || !toastMessageElement) return;
  
  toastMessageElement.textContent = message;
  toastElement.classList.remove('hidden');
  
  if (type === 'success') {
    toastElement.style.borderColor = 'var(--color-success)';
  } else {
    toastElement.style.borderColor = 'var(--color-danger)';
  }
  
  setTimeout(() => {
    toastElement.classList.add('hidden');
  }, 3000);
};

// Global confirm helpers
let _confirmCallback = null;
window.showConfirmModal = function(message, onOK) {
  _confirmCallback = onOK;
  const msgEl = document.getElementById('confirm-modal-message');
  const modalEl = document.getElementById('confirm-modal');
  if (msgEl) msgEl.textContent = message;
  if (modalEl) modalEl.classList.remove('hidden');
};

window.confirmModalOK = function() {
  const cb = _confirmCallback;
  window.closeConfirmModal();
  if (typeof cb === 'function') {
    cb();
  }
};

window.closeConfirmModal = function() {
  const modalEl = document.getElementById('confirm-modal');
  if (modalEl) modalEl.classList.add('hidden');
  _confirmCallback = null;
};

// Global Redo All Helpers used in practice/report screens
window.redoAllQuestions = function() {
  window.showConfirmModal(
    'Bạn có chắc chắn muốn làm lại TẤT CẢ câu hỏi? Toàn bộ tiến trình sẽ bị xoá.',
    async () => {
      Store.userProgress = {};
      localStorage.removeItem('db_exam_prep_progress');
      // For backend, we might want to clear all, but for now we just clear local and let ApiService handle it if needed.
      // Actually backend sync could overwrite this if not careful. For now this keeps existing logic.
      PracticeUI.updateProgressStats();
      PracticeUI.renderSidebarGrid();
      BankUI.renderQuestionBank();
      Store.practiceIndex = 0;
      if (Store.activeTab === 'practice') PracticeUI.displayPracticeQuestion();
      window.showToast('Đã xoá toàn bộ tiến trình. Bắt đầu lại từ câu 1!', 'success');
    }
  );
};

window.confirmRedoAllWrong = function() {
  const wrongQuestions = Store.questions.filter(q => {
    const progress = Store.userProgress[q.id];
    return progress && progress.answeredIndex !== undefined && !progress.isCorrect;
  });
  const wrongCount = wrongQuestions.length;
  
  if (wrongCount === 0) {
    window.showToast('Bạn không có câu hỏi nào làm sai!', 'success');
    return;
  }
  
  if (confirm(`Bạn có chắc chắn muốn làm lại tất cả ${wrongCount} câu hỏi đã trả lời sai?`)) {
    Store.questions.forEach(q => {
      const progress = Store.userProgress[q.id];
      if (progress && progress.answeredIndex !== undefined && !progress.isCorrect) {
        delete progress.answeredIndex;
        delete progress.isCorrect;
      }
    });
    
    localStorage.setItem('db_exam_prep_progress', JSON.stringify(Store.userProgress));
    
    // Sync to backend
    ApiService.saveProgress(Store.userProgress).catch(e => console.error("Failed to sync redo", e));
    
    window.showToast(`Đã reset ${wrongCount} câu làm sai. Hãy bắt đầu ôn tập lại!`, 'success');
    PracticeUI.updateProgressStats();
    PracticeUI.renderSidebarGrid();
    
    const reportScreen = document.getElementById('practice-report-screen');
    const studyScreen = document.getElementById('practice-study-screen');
    if (reportScreen) reportScreen.classList.add('hidden');
    if (studyScreen) studyScreen.classList.remove('hidden');

    // Switch to incorrect filter
    const btnIncorrect = document.getElementById('filter-incorrect');
    if (btnIncorrect) btnIncorrect.click();

    // Find first previously wrong question (now unanswered)
    const firstWrongIndex = Store.questions.findIndex(q => {
      return wrongQuestions.some(wq => wq.id === q.id);
    });
    
    if (firstWrongIndex !== -1) {
      Store.practiceIndex = firstWrongIndex;
      PracticeUI.displayPracticeQuestion();
    }
  }
};

window.viewPracticeReportDirectly = function() {
  Navigation.switchTab('practice');
  // Trigger logic in PracticeUI, but it's isolated.
  const studyScreen = document.getElementById('practice-study-screen');
  const reportScreen = document.getElementById('practice-report-screen');
  if (studyScreen && reportScreen) {
    studyScreen.classList.remove('active');
    studyScreen.classList.add('hidden');
    reportScreen.classList.remove('hidden');
    reportScreen.classList.add('active');
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  await Store.init();
  
  Navigation.init();
  PracticeUI.init();
  MockUI.init();
  BankUI.init();
  
  // Initial renders
  PracticeUI.updateProgressStats();
  PracticeUI.renderSidebarGrid();
  PracticeUI.displayPracticeQuestion();
  BankUI.renderQuestionBank();
  

  // Bind global buttons
  const btnConfirmOk = document.getElementById('confirm-modal-ok');
  const btnConfirmCancel = document.getElementById('confirm-modal-cancel');
  if (btnConfirmOk) btnConfirmOk.addEventListener('click', window.confirmModalOK);
  if (btnConfirmCancel) btnConfirmCancel.addEventListener('click', window.closeConfirmModal);

  const btnPracticeContinue = document.getElementById('btn-practice-continue');
  const btnPracticeRedoAll = document.getElementById('btn-practice-redo-all');
  const btnPracticeRedoWrong = document.getElementById('btn-practice-redo-wrong');
  const btnSidebarReport = document.getElementById('btn-sidebar-report');

  if (btnPracticeContinue) {
    btnPracticeContinue.addEventListener('click', () => {
      Navigation.switchTab('practice');
      const studyScreen = document.getElementById('practice-study-screen');
      const reportScreen = document.getElementById('practice-report-screen');
      if (studyScreen && reportScreen) {
        reportScreen.classList.remove('active');
        reportScreen.classList.add('hidden');
        studyScreen.classList.remove('hidden');
        studyScreen.classList.add('active');
        PracticeUI.displayPracticeQuestion();
      }
    });
  }
  
  if (btnPracticeRedoAll) btnPracticeRedoAll.addEventListener('click', window.redoAllQuestions);
  if (btnPracticeRedoWrong) btnPracticeRedoWrong.addEventListener('click', window.confirmRedoAllWrong);
  if (btnSidebarReport) btnSidebarReport.addEventListener('click', window.viewPracticeReportDirectly);

  // Expose delete handlers for global usage if needed
  window.deleteCurrentQuestion = async function() {
    if (Store.questions.length === 0) return;
    const q = Store.questions[Store.practiceIndex];
    await BankUI.deleteQuestionById(q.id);
  };
});
