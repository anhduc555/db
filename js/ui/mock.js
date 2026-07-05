import { Store } from '../state/store.js';
import { Navigation } from './navigation.js';
import { PracticeUI } from './practice.js';

export const MockUI = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    const btnStart = document.getElementById('btn-start-mock');
    const btnSubmit = document.getElementById('btn-submit-mock');
    const btnPrevMock = document.getElementById('mock-btn-prev');
    const btnNextMock = document.getElementById('mock-btn-next');
    const mockFlagBtn = document.getElementById('mock-flag-btn');
    const btnReviewMock = document.getElementById('btn-review-mock');
    const btnRestartMock = document.getElementById('btn-restart-mock');
    
    if (btnStart) btnStart.addEventListener('click', () => this.startMockTest());
    if (btnSubmit) btnSubmit.addEventListener('click', () => this.confirmSubmitMockTest());
    if (btnPrevMock) btnPrevMock.addEventListener('click', () => this.prevMockQuestion());
    if (btnNextMock) btnNextMock.addEventListener('click', () => this.nextMockQuestion());
    if (mockFlagBtn) mockFlagBtn.addEventListener('click', () => this.toggleFlagMockQuestion());
    
    if (btnReviewMock) btnReviewMock.addEventListener('click', () => this.reviewMockTest());
    if (btnRestartMock) btnRestartMock.addEventListener('click', () => this.resetMockTestToStart());
  },

  startMockTest() {
    document.getElementById('mock-start-screen').classList.remove('active');
    document.getElementById('mock-results-screen').classList.remove('active');
    document.getElementById('mock-test-screen').classList.add('active');
    
    const mockWrongReview = document.getElementById('mock-wrong-review');
    if (mockWrongReview) mockWrongReview.classList.add('hidden');
    
    const totalQuestions = Store.questions.length;
    const selectedIds = [];
    const indices = Array.from({ length: totalQuestions }, (_, i) => i);
    
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    const mockCount = Math.min(40, totalQuestions);
    for (let i = 0; i < mockCount; i++) {
      selectedIds.push(Store.questions[indices[i]].id);
    }
    
    Store.mockTestState = {
      isActive: true,
      questions: selectedIds.map(id => Store.questions.find(q => q.id === id)),
      answers: Array(mockCount).fill(null),
      currentIndex: 0,
      timeRemaining: 2400,
      flags: Array(mockCount).fill(false),
      isSubmitted: false
    };
    
    this.initMockNavGrid();
    
    clearInterval(Store.mockTestState.timerInterval);
    Store.mockTestState.timerInterval = setInterval(() => this.updateMockTimer(), 1000);
    
    this.displayMockQuestion();
    this.updateMockProgressText();
  },

  initMockNavGrid() {
    const container = document.getElementById('mock-nav-grid');
    if (!container) return;
    container.innerHTML = '';
    
    Store.mockTestState.questions.forEach((_, idx) => {
      const btn = document.createElement('button');
      btn.className = 'mock-grid-btn';
      btn.id = `mock-grid-btn-${idx}`;
      btn.textContent = idx + 1;
      btn.onclick = () => this.goToMockQuestion(idx);
      container.appendChild(btn);
    });
  },

  displayMockQuestion() {
    if (!Store.mockTestState.isActive && !Store.mockTestState.isSubmitted) return;
    
    const idx = Store.mockTestState.currentIndex;
    const q = Store.mockTestState.questions[idx];
    if (!q) return;
    
    document.querySelectorAll('.mock-grid-btn').forEach(btn => btn.classList.remove('active'));
    const currentBtn = document.getElementById(`mock-grid-btn-${idx}`);
    if (currentBtn) currentBtn.classList.add('active');
    
    const badge = document.getElementById('mock-question-badge');
    if (badge) badge.textContent = `Câu ${idx + 1}/40`;
    
    const flagBtn = document.getElementById('mock-flag-btn');
    if (flagBtn) {
      if (Store.mockTestState.flags[idx]) flagBtn.classList.add('flagged');
      else flagBtn.classList.remove('flagged');
    }
    
    const qText = document.getElementById('mock-question-text');
    if (qText) qText.textContent = q.question;
    
    const optionsContainer = document.getElementById('mock-options');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const alphabet = ['A', 'B', 'C', 'D'];
      const userAns = Store.mockTestState.answers[idx];
      const isSubmitted = Store.mockTestState.isSubmitted;
      
      q.options.forEach((optText, optIdx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'mock-option-choice';
        radio.className = 'option-radio';
        radio.value = optIdx;
        radio.disabled = isSubmitted;
        
        if (userAns === optIdx) {
          radio.checked = true;
          card.classList.add('selected');
        }
        
        const prefix = document.createElement('span');
        prefix.className = 'option-prefix';
        prefix.textContent = `${alphabet[optIdx]}.`;
        
        const text = document.createElement('span');
        text.className = 'option-text';
        text.textContent = optText;
        
        card.appendChild(radio);
        card.appendChild(prefix);
        card.appendChild(text);
        
        if (!isSubmitted) {
          card.onclick = () => {
            radio.checked = true;
            this.selectMockOption(optIdx);
            document.querySelectorAll('#mock-options .option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            if (Store.isAutoNextEnabled) {
              const originalIndex = Store.mockTestState.currentIndex;
              if (originalIndex < Store.mockTestState.questions.length - 1) {
                setTimeout(() => {
                  if (Store.mockTestState.isActive && Store.mockTestState.currentIndex === originalIndex) {
                    this.nextMockQuestion();
                  }
                }, 1500);
              }
            }
          };
        } else {
          if (optIdx === q.correctAnswer) card.classList.add('correct');
          else if (userAns === optIdx && userAns !== q.correctAnswer) card.classList.add('incorrect');
        }
        
        optionsContainer.appendChild(card);
      });
    }
    
    const prevBtn = document.getElementById('mock-btn-prev');
    const nextBtn = document.getElementById('mock-btn-next');
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === Store.mockTestState.questions.length - 1;
  },

  selectMockOption(optionIndex) {
    const idx = Store.mockTestState.currentIndex;
    Store.mockTestState.answers[idx] = optionIndex;
    
    const btn = document.getElementById(`mock-grid-btn-${idx}`);
    if (btn) btn.classList.add('answered');
    
    this.updateMockProgressText();
  },

  updateMockProgressText() {
    const answeredCount = Store.mockTestState.answers.filter(ans => ans !== null).length;
    const txt = document.getElementById('mock-progress-text');
    if (txt) txt.textContent = `${answeredCount}/40`;
  },

  goToMockQuestion(idx) {
    if (idx >= 0 && idx < Store.mockTestState.questions.length) {
      Store.mockTestState.currentIndex = idx;
      this.displayMockQuestion();
    }
  },

  prevMockQuestion() {
    if (Store.mockTestState.currentIndex > 0) {
      Store.mockTestState.currentIndex--;
      this.displayMockQuestion();
    }
  },

  nextMockQuestion() {
    if (Store.mockTestState.currentIndex < Store.mockTestState.questions.length - 1) {
      Store.mockTestState.currentIndex++;
      this.displayMockQuestion();
    }
  },

  toggleFlagMockQuestion() {
    const idx = Store.mockTestState.currentIndex;
    Store.mockTestState.flags[idx] = !Store.mockTestState.flags[idx];
    this.displayMockQuestion();
    
    const btn = document.getElementById(`mock-grid-btn-${idx}`);
    if (btn) {
      if (Store.mockTestState.flags[idx]) btn.classList.add('flagged');
      else btn.classList.remove('flagged');
    }
  },

  updateMockTimer() {
    if (!Store.mockTestState.isActive) return;
    
    if (Store.mockTestState.timeRemaining <= 0) {
      this.submitMockTest(true);
      return;
    }
    
    Store.mockTestState.timeRemaining--;
    
    const minutes = Math.floor(Store.mockTestState.timeRemaining / 60);
    const seconds = Store.mockTestState.timeRemaining % 60;
    
    const timerDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const timerElement = document.getElementById('mock-timer');
    if (timerElement) {
      timerElement.textContent = timerDisplay;
      if (Store.mockTestState.timeRemaining < 300) {
        timerElement.classList.add('warning');
      } else {
        timerElement.classList.remove('warning');
      }
    }
  },

  confirmSubmitMockTest() {
    const unansweredCount = Store.mockTestState.answers.filter(ans => ans === null).length;
    let msg = 'Bạn có chắc chắn muốn nộp bài thi?';
    if (unansweredCount > 0) {
      msg = `Bạn còn ${unansweredCount} câu hỏi chưa trả lời. Bạn có chắc chắn muốn nộp bài thi?`;
    }
    if (confirm(msg)) {
      this.submitMockTest(false);
    }
  },

  async submitMockTest(isAutoSubmit = false) {
    clearInterval(Store.mockTestState.timerInterval);
    Store.mockTestState.isActive = false;
    Store.mockTestState.isSubmitted = true;
    
    if (isAutoSubmit) {
      alert('Hết giờ làm bài! Bài thi của bạn đã được tự động nộp.');
    }
    
    let correctCount = 0;
    Store.mockTestState.questions.forEach((q, idx) => {
      const userAns = Store.mockTestState.answers[idx];
      if (userAns === q.correctAnswer) {
        correctCount++;
      }
    });
    
    const accuracy = Math.round((correctCount / Store.mockTestState.questions.length) * 100);
    const timeUsedSeconds = 2400 - Store.mockTestState.timeRemaining;
    const timeUsedMinutes = Math.floor(timeUsedSeconds / 60);
    const timeUsedRemainingSeconds = timeUsedSeconds % 60;
    const timeString = `${timeUsedMinutes} phút ${timeUsedRemainingSeconds} giây`;
    
    document.getElementById('mock-test-screen').classList.remove('active');
    document.getElementById('mock-results-screen').classList.add('active');
    
    const mockWrongReview = document.getElementById('mock-wrong-review');
    if (mockWrongReview) mockWrongReview.classList.add('hidden');
    
    document.getElementById('result-score-text').textContent = `${correctCount}/${Store.mockTestState.questions.length}`;
    document.getElementById('result-accuracy').textContent = `${accuracy}%`;
    document.getElementById('result-time').textContent = timeString;
    
    let summaryText = 'Cần học thêm lý thuyết!';
    if (accuracy >= 80) summaryText = 'Xuất sắc! Bạn đã sẵn sàng cho kỳ thi.';
    else if (accuracy >= 65) summaryText = 'Khá tốt! Ôn luyện thêm một chút là vững kiến thức.';
    else if (accuracy >= 50) summaryText = 'Trung bình! Cần chú ý thêm các câu lý thuyết cơ bản.';
    
    const sumElem = document.getElementById('result-summary');
    if (sumElem) sumElem.textContent = summaryText;
    
    // Sync to backend DB using ApiService
    for (let idx = 0; idx < Store.mockTestState.questions.length; idx++) {
      const q = Store.mockTestState.questions[idx];
      const userAns = Store.mockTestState.answers[idx];
      if (userAns !== null) {
        await Store.saveProgress(q.id, {
          answeredIndex: userAns,
          isCorrect: userAns === q.correctAnswer
        });
      }
    }
    
    PracticeUI.updateProgressStats();
    PracticeUI.renderSidebarGrid();
  },

  reviewMockTest() {
    document.getElementById('mock-results-screen').classList.remove('active');
    document.getElementById('mock-test-screen').classList.add('active');
    
    Store.mockTestState.currentIndex = 0;
    
    Store.mockTestState.questions.forEach((q, idx) => {
      const btn = document.getElementById(`mock-grid-btn-${idx}`);
      if (btn) {
        btn.className = 'mock-grid-btn';
        const userAns = Store.mockTestState.answers[idx];
        if (userAns === q.correctAnswer) btn.classList.add('correct');
        else if (userAns !== null) btn.classList.add('incorrect');
      }
    });
    
    this.displayMockQuestion();
  },

  resetMockTestToStart() {
    clearInterval(Store.mockTestState.timerInterval);
    Store.mockTestState.isActive = false;
    Store.mockTestState.isSubmitted = false;
    
    document.getElementById('mock-start-screen').classList.add('active');
    document.getElementById('mock-test-screen').classList.remove('active');
    document.getElementById('mock-results-screen').classList.remove('active');
    
    const mockWrongReview = document.getElementById('mock-wrong-review');
    if (mockWrongReview) mockWrongReview.classList.add('hidden');
    
    Navigation.switchTab('mock');
  }
};
