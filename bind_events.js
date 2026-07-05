import fs from 'fs';

let appJs = fs.readFileSync('js/app.js', 'utf8');

// Bind the new report action buttons and the modal buttons
const addBindings = `
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
`;

appJs = appJs.replace(
  '  // Expose delete handlers for global usage if needed',
  addBindings + '\n  // Expose delete handlers for global usage if needed'
);

fs.writeFileSync('js/app.js', appJs);
console.log('Fixed js/app.js');
