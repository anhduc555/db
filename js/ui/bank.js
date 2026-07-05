import { Store } from '../state/store.js';
import { Navigation } from './navigation.js';
import { PracticeUI } from './practice.js';
import { ApiService } from '../services/api.js';

export const BankUI = {
  currentPage: 1,
  itemsPerPage: 50,
  filteredQuestions: [],

  init() {
    this.bindEvents();
    window.addEventListener('tabChanged', (e) => {
      if (e.detail.tabId === 'bank') {
        this.currentPage = 1;
        this.renderQuestionBank();
      }
    });
  },

  bindEvents() {
    const searchInput = document.getElementById('bank-search');
    const filterSelect = document.getElementById('bank-status-filter');
    const formAdd = document.getElementById('add-question-form');
    const btnPrev = document.getElementById('btn-bank-prev');
    const btnNext = document.getElementById('btn-bank-next');
    
    if (searchInput) searchInput.addEventListener('input', () => { this.currentPage = 1; this.renderQuestionBank(); });
    if (filterSelect) filterSelect.addEventListener('change', () => { this.currentPage = 1; this.renderQuestionBank(); });
    if (formAdd) formAdd.addEventListener('submit', (e) => this.handleAddQuestion(e));
    
    if (btnPrev) btnPrev.addEventListener('click', () => {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.renderPaginated();
      }
    });
    
    if (btnNext) btnNext.addEventListener('click', () => {
      const maxPages = Math.ceil(this.filteredQuestions.length / this.itemsPerPage);
      if (this.currentPage < maxPages) {
        this.currentPage++;
        this.renderPaginated();
      }
    });
  },

  renderQuestionBank() {
    const query = document.getElementById('bank-search').value.toLowerCase().trim();
    const filterStatus = document.getElementById('bank-status-filter').value;
    
    this.filteredQuestions = [];
    
    Store.questions.forEach((q, index) => {
      const progress = Store.userProgress[q.id] || {};
      
      let statusMatch = true;
      if (filterStatus === 'correct' && !progress.isCorrect) statusMatch = false;
      if (filterStatus === 'incorrect' && (progress.isCorrect || progress.answeredIndex === undefined)) statusMatch = false;
      if (filterStatus === 'flagged' && !progress.isFlagged) statusMatch = false;
      if (filterStatus === 'unanswered' && progress.answeredIndex !== undefined) statusMatch = false;
      
      if (!statusMatch) return;
      
      const textMatch = q.question.toLowerCase().includes(query) || 
                        q.options.some(opt => opt.toLowerCase().includes(query));
                        
      if (!textMatch) return;
      
      this.filteredQuestions.push({ q, index });
    });
    
    const statsElem = document.getElementById('bank-stats');
    if (statsElem) statsElem.textContent = `Tìm thấy ${this.filteredQuestions.length} câu hỏi phù hợp.`;
    
    this.renderPaginated();
  },
  
  renderPaginated() {
    const listContainer = document.getElementById('bank-questions-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    const alphabet = ['A', 'B', 'C', 'D'];
    
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.filteredQuestions.length);
    const paginatedItems = this.filteredQuestions.slice(startIndex, endIndex);
    
    paginatedItems.forEach(item => {
      const { q, index } = item;
      const progress = Store.userProgress[q.id] || {};
      
      const qCard = document.createElement('div');
      qCard.className = 'bank-q-card';
      
      const header = document.createElement('div');
      header.className = 'bank-q-header';
      
      const title = document.createElement('div');
      title.className = 'bank-q-title';
      title.textContent = `Câu ${index + 1}: ${q.question}`;
      
      const statusContainer = document.createElement('div');
      statusContainer.className = 'bank-q-status';
      
      const badge = document.createElement('span');
      if (progress.answeredIndex !== undefined && progress.answeredIndex !== null) {
        if (progress.isCorrect) {
          badge.className = 'bank-badge correct';
          badge.textContent = 'Đúng';
        } else {
          badge.className = 'bank-badge incorrect';
          badge.textContent = 'Sai';
        }
      } else {
        badge.className = 'bank-badge unanswered';
        badge.textContent = 'Chưa làm';
      }
      statusContainer.appendChild(badge);
      
      if (progress.isFlagged) {
        const flagBadge = document.createElement('span');
        flagBadge.className = 'bank-badge flagged';
        flagBadge.textContent = 'Đã đánh dấu';
        statusContainer.appendChild(flagBadge);
      }
      
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'bank-delete-btn';
      deleteBtn.title = 'Xóa câu hỏi này';
      deleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      `;
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        this.deleteQuestionById(q.id);
      };
      statusContainer.appendChild(deleteBtn);
      
      header.appendChild(title);
      header.appendChild(statusContainer);
      qCard.appendChild(header);
      
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'bank-q-options';
      
      q.options.forEach((optText, optIdx) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'bank-opt';
        optDiv.textContent = `${alphabet[optIdx]}. ${optText}`;
        if (optIdx === q.correctAnswer) optDiv.classList.add('correct-opt');
        optionsDiv.appendChild(optDiv);
      });
      
      qCard.appendChild(optionsDiv);
      
      if (q.explanation) {
        const expDiv = document.createElement('div');
        expDiv.className = 'bank-q-explanation';
        expDiv.innerHTML = `<span class="exp-label">💡 Giải thích:</span> ${q.explanation}`;
        qCard.appendChild(expDiv);
      }
      
      qCard.onclick = (e) => {
        if (e.target.closest('.bank-q-options')) return;
        Navigation.switchTab('practice');
        PracticeUI.goToPracticeQuestion(index);
      };
      
      listContainer.appendChild(qCard);
    });
    
    this.updatePaginationUI();
  },
  
  updatePaginationUI() {
    const maxPages = Math.max(1, Math.ceil(this.filteredQuestions.length / this.itemsPerPage));
    document.getElementById('bank-page-info').textContent = `Trang ${this.currentPage} / ${maxPages}`;
    
    const btnPrev = document.getElementById('btn-bank-prev');
    const btnNext = document.getElementById('btn-bank-next');
    
    if (btnPrev) btnPrev.disabled = this.currentPage <= 1;
    if (btnNext) btnNext.disabled = this.currentPage >= maxPages;
  },

  async handleAddQuestion(event) {
    event.preventDefault();
    
    const questionText = document.getElementById('new-question-text').value.trim();
    const optionA = document.getElementById('new-option-0').value.trim();
    const optionB = document.getElementById('new-option-1').value.trim();
    const optionC = document.getElementById('new-option-2').value.trim();
    const optionD = document.getElementById('new-option-3').value.trim();
    const correctOptionIdx = parseInt(document.getElementById('new-correct-option').value);
    
    if (!questionText || !optionA || !optionB || !optionC || !optionD || isNaN(correctOptionIdx)) {
      window.showToast('Vui lòng điền đầy đủ các thông tin bắt buộc.', 'error');
      return;
    }
    
    const newQuestion = {
      question: questionText,
      options: [optionA, optionB, optionC, optionD],
      correctAnswer: correctOptionIdx
    };
    
    await ApiService.saveCustomQuestion(newQuestion);
    
    document.getElementById('add-question-form').reset();
    window.showToast('Đã thêm câu hỏi mới thành công!', 'success');
    
    await Store.init();
    
    setTimeout(() => {
      Navigation.switchTab('practice');
      PracticeUI.goToPracticeQuestion(Store.questions.length - 1);
    }, 100);
  },

  async deleteQuestionById(id) {
    if (confirm(`Bạn có chắc chắn muốn xóa câu hỏi này khỏi danh sách ôn tập?`)) {
      const deletedIds = JSON.parse(localStorage.getItem('db_exam_prep_deleted_question_ids')) || [];
      deletedIds.push(id);
      localStorage.setItem('db_exam_prep_deleted_question_ids', JSON.stringify(deletedIds));
      
      window.showToast('Đã xóa câu hỏi khỏi danh sách!', 'success');
      
      await Store.init();
      
      // If we deleted the last item on the page, go back one page
      const maxPages = Math.ceil(this.filteredQuestions.length / this.itemsPerPage);
      if (this.currentPage > maxPages && this.currentPage > 1) {
        this.currentPage--;
      }
      
      this.renderQuestionBank();
    }
  }
};
