import { Store } from '../state/store.js';
import { Navigation } from './navigation.js';

export const PracticeUI = {
  init() {
    this.bindEvents();
    window.addEventListener('tabChanged', (e) => {
      if (e.detail.tabId === 'practice') {
        this.renderSidebarGrid();
        this.displayPracticeQuestion();
      }
    });
  },

  bindEvents() {
    // Bind buttons
    const btnCheck = document.getElementById('btn-check');
    const btnRedo = document.getElementById('btn-redo');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const flagBtn = document.getElementById('practice-flag-btn');
    const autoNextToggle = document.getElementById('auto-next-toggle');

    if (btnCheck) btnCheck.addEventListener('click', () => this.checkPracticeAnswer());
    if (btnRedo) btnRedo.addEventListener('click', () => this.redoQuestion());
    if (btnPrev) btnPrev.addEventListener('click', () => this.prevQuestion());
    if (btnNext) btnNext.addEventListener('click', () => this.nextQuestion());
    if (flagBtn) flagBtn.addEventListener('click', () => this.toggleFlagCurrentQuestion());
    
    if (autoNextToggle) {
      autoNextToggle.checked = Store.isAutoNextEnabled;
      autoNextToggle.addEventListener('change', (e) => {
        Store.isAutoNextEnabled = e.target.checked;
        Store.saveSettings();
        window.showToast(Store.isAutoNextEnabled ? 'Đã bật tự động chuyển câu hỏi.' : 'Đã tắt tự động chuyển câu hỏi.', 'success');
      });
    }
    
    // Filters
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const filterType = e.currentTarget.id.replace('filter-', '');
        this.filterSidebarGrid(filterType);
      });
    });
  },

  updateProgressStats() {
    const questions = Store.questions;
    const userProgress = Store.userProgress;
    const total = questions.length;
    if (total === 0) return;
    
    let answeredCount = 0;
    let correctCount = 0;
    
    Object.keys(userProgress).forEach(id => {
      const progress = userProgress[id];
      if (questions.some(q => q.id == id)) {
        if (progress.answeredIndex !== undefined && progress.answeredIndex !== null) {
          answeredCount++;
          if (progress.isCorrect) correctCount++;
        }
      }
    });
    
    const statCompleted = document.getElementById('stat-completed');
    const statRate = document.getElementById('stat-correct-rate');
    const progressFill = document.getElementById('progress-fill');
    
    if (statCompleted) statCompleted.textContent = `${answeredCount}/${total}`;
    if (statRate) {
      const rate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      statRate.textContent = `${rate}%`;
    }
    if (progressFill) {
      const progressPercent = Math.round((answeredCount / total) * 100);
      progressFill.style.width = `${progressPercent}%`;
    }

    // Update Report Screen stats
    const incorrectCount = answeredCount - correctCount;
    const rptTotal = document.getElementById('practice-total-count');
    const rptCorrect = document.getElementById('practice-correct-count');
    const rptIncorrect = document.getElementById('practice-incorrect-count');
    const rptAcc = document.getElementById('practice-accuracy');
    
    if (rptTotal) rptTotal.textContent = total;
    if (rptCorrect) rptCorrect.textContent = correctCount;
    if (rptIncorrect) rptIncorrect.textContent = incorrectCount;
    if (rptAcc) {
      rptAcc.textContent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) + '%' : '0%';
    }
    
    if (typeof this.renderWrongQuestionsList === 'function') {
      this.renderWrongQuestionsList();
    }
  },

  renderWrongQuestionsList() {
    const wrongQuestions = Store.questions.filter(q => {
      const progress = Store.userProgress[q.id];
      return progress && progress.answeredIndex !== undefined && !progress.isCorrect;
    });

    const container = document.getElementById('wrong-questions-container');
    const wrapper = document.getElementById('wrong-questions-review');
    
    if (!container || !wrapper) return;

    if (wrongQuestions.length === 0) {
      wrapper.classList.add('hidden');
      return;
    }

    wrapper.classList.remove('hidden');
    container.innerHTML = '';

    wrongQuestions.forEach((q, idx) => {
      const progress = Store.userProgress[q.id];
      const selectedText = q.options[progress.answeredIndex] || 'Không có';
      const correctText = q.options[q.correctAnswer] || 'Không có';

      const card = document.createElement('div');
      card.className = 'wrong-question-card';
      card.style.border = '1px solid var(--border-color)';
      card.style.padding = '16px';
      card.style.borderRadius = 'var(--border-radius)';
      card.style.marginBottom = '16px';
      card.style.backgroundColor = 'var(--bg-app)';
      card.style.position = 'relative';

      card.innerHTML = `
        <h4 style="margin: 0 0 10px 0; font-size: 16px;">Câu ${idx + 1}: ${q.question}</h4>
        <div style="margin-bottom: 8px;">
          <span style="color: var(--color-danger); font-weight: 500;">❌ Đã chọn:</span> ${selectedText}
        </div>
        <div style="margin-bottom: 12px;">
          <span style="color: var(--color-success); font-weight: 500;">✅ Đáp án đúng:</span> ${correctText}
        </div>
        <button class="btn btn-secondary btn-sm" onclick="window.askAI('explain_wrong', ${q.id})">
          Giải thích (AI)
        </button>
      `;
      container.appendChild(card);
    });
  },

  renderSidebarGrid(filter = 'all') {
    const gridContainer = document.getElementById('question-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = '';
    
    Store.questions.forEach((q, index) => {
      const progress = Store.userProgress[q.id] || {};
      
      if (filter === 'incorrect' && !progress.isCorrect) {
        if (progress.answeredIndex === undefined) return;
      }
      if (filter === 'flagged' && !progress.isFlagged) {
        return;
      }
      
      const cell = document.createElement('button');
      cell.className = 'grid-item';
      cell.id = `grid-item-${q.id}`;
      cell.textContent = index + 1;
      
      if (index === Store.practiceIndex && Store.activeTab === 'practice') {
        cell.classList.add('active');
      }
      if (progress.answeredIndex !== undefined && progress.answeredIndex !== null) {
        if (progress.isCorrect) cell.classList.add('correct');
        else cell.classList.add('incorrect');
      }
      if (progress.isFlagged) {
        cell.classList.add('flagged');
      }
      
      cell.onclick = () => {
        Navigation.switchTab('practice');
        this.goToPracticeQuestion(index);
      };
      
      gridContainer.appendChild(cell);
    });
  },

  filterSidebarGrid(filterType) {
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.classList.remove('active');
    });
    const activeChip = document.getElementById(`filter-${filterType}`);
    if (activeChip) activeChip.classList.add('active');
    
    this.renderSidebarGrid(filterType);
  },

  displayPracticeQuestion() {
    if (Store.questions.length === 0) return;
    
    const q = Store.questions[Store.practiceIndex];
    const progress = Store.userProgress[q.id] || {};
    
    document.querySelectorAll('.grid-item').forEach(item => item.classList.remove('active'));
    const currentGridItem = document.getElementById(`grid-item-${q.id}`);
    if (currentGridItem) currentGridItem.classList.add('active');
    
    const badge = document.getElementById('practice-question-badge');
    if (badge) badge.textContent = `Câu ${Store.practiceIndex + 1}`;
    
    const flagBtn = document.getElementById('practice-flag-btn');
    if (flagBtn) {
      if (progress.isFlagged) flagBtn.classList.add('flagged');
      else flagBtn.classList.remove('flagged');
    }
    
    const questionText = document.getElementById('practice-question-text');
    if (questionText) questionText.textContent = q.question;
    
    const isAlreadyAnswered = progress.answeredIndex !== undefined && progress.answeredIndex !== null;
    
    const optionsContainer = document.getElementById('practice-options');
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const alphabet = ['A', 'B', 'C', 'D'];
      
      q.options.forEach((optText, optIdx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.id = `practice-opt-${optIdx}`;
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'practice-option-choice';
        radio.className = 'option-radio';
        radio.value = optIdx;
        radio.disabled = isAlreadyAnswered;
        
        if (isAlreadyAnswered && progress.answeredIndex === optIdx) {
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
        
        if (!isAlreadyAnswered) {
          card.onclick = () => {
            radio.checked = true;
            document.querySelectorAll('#practice-options .option-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            if (Store.isAutoNextEnabled) {
              this.checkPracticeAnswer();
            }
          };
        } else {
          if (optIdx === q.correctAnswer) card.classList.add('correct');
          else if (optIdx === progress.answeredIndex && !progress.isCorrect) card.classList.add('incorrect');
        }
        
        optionsContainer.appendChild(card);
      });
    }
    
    const feedbackPanel = document.getElementById('feedback-panel');
    const btnCheck = document.getElementById('btn-check');
    const btnRedo = document.getElementById('btn-redo');
    
    if (isAlreadyAnswered) {
      if (feedbackPanel) {
        feedbackPanel.classList.remove('hidden');
        feedbackPanel.className = 'feedback-panel ' + (progress.isCorrect ? 'correct-feedback' : 'incorrect-feedback');
        document.getElementById('feedback-title').textContent = progress.isCorrect
          ? 'Chính xác! ✓'
          : `Chưa chính xác ✗  —  Đáp án đúng: ${['A', 'B', 'C', 'D'][q.correctAnswer]}`;
        const expNode = document.getElementById('feedback-explanation');
        if (expNode) expNode.textContent = '';
      }
      if (btnCheck) {
        btnCheck.classList.add('hidden');
        btnCheck.style.display = 'none';
      }
      if (btnRedo) {
        btnRedo.classList.remove('hidden');
        btnRedo.style.display = 'inline-flex';
      }
    } else {
      if (feedbackPanel) feedbackPanel.classList.add('hidden');
      if (btnCheck) {
        // If Auto Next is on, we don't strictly need the check button, but we show it anyway to be safe, or we can hide it.
        // Let's show it just in case auto-next fails.
        btnCheck.classList.remove('hidden');
        btnCheck.style.display = 'inline-flex';
        btnCheck.disabled = false;
      }
      if (btnRedo) {
        btnRedo.classList.add('hidden');
        btnRedo.style.display = 'none';
      }
    }
    
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    if (btnPrev) btnPrev.disabled = Store.practiceIndex === 0;
    if (btnNext) btnNext.disabled = Store.practiceIndex === Store.questions.length - 1;
  },

  goToPracticeQuestion(index) {
    if (index >= 0 && index < Store.questions.length) {
      Store.practiceIndex = index;
      this.displayPracticeQuestion();
    }
  },

  prevQuestion() {
    if (Store.practiceIndex > 0) {
      Store.practiceIndex--;
      this.displayPracticeQuestion();
    }
  },

  nextQuestion() {
    if (Store.practiceIndex < Store.questions.length - 1) {
      Store.practiceIndex++;
      this.displayPracticeQuestion();
    }
  },

  async checkPracticeAnswer() {
    const selectedRadio = document.querySelector('input[name="practice-option-choice"]:checked');
    if (!selectedRadio) {
      window.showToast('Vui lòng chọn một phương án trả lời.', 'error');
      return;
    }
    
    const q = Store.questions[Store.practiceIndex];
    const selectedAnswerIndex = parseInt(selectedRadio.value);
    const isCorrect = selectedAnswerIndex === q.correctAnswer;
    
    try {
      await Store.saveProgress(q.id, {
        answeredIndex: selectedAnswerIndex,
        isCorrect: isCorrect
      });
    } catch (e) {
      console.error("Failed to save progress", e);
    }
    
    this.updateProgressStats();
    this.renderSidebarGrid();
    this.displayPracticeQuestion();
    
    if (isCorrect) window.showToast('Câu trả lời chính xác!', 'success');
    else window.showToast('Câu trả lời chưa đúng.', 'error');

    if (Store.isAutoNextEnabled) {
      setTimeout(() => {
        if (Store.practiceIndex < Store.questions.length - 1) {
          this.nextQuestion();
        }
      }, 1000); // 1 second delay to let user see the result before moving on
    }
  },

  redoQuestion() {
    const q = Store.questions[Store.practiceIndex];
    Store.saveProgress(q.id, { answeredIndex: null, isCorrect: null }).then(() => {
      this.updateProgressStats();
      this.renderSidebarGrid();
      this.displayPracticeQuestion();
    });
  },

  async toggleFlagCurrentQuestion() {
    const q = Store.questions[Store.practiceIndex];
    const currentFlagState = Store.userProgress[q.id] ? !!Store.userProgress[q.id].isFlagged : false;
    
    await Store.saveProgress(q.id, { isFlagged: !currentFlagState });
    
    this.displayPracticeQuestion();
    this.renderSidebarGrid();
    window.showToast(!currentFlagState ? 'Đã đánh dấu câu hỏi này.' : 'Đã bỏ đánh dấu câu hỏi này.', 'success');
  }
};
