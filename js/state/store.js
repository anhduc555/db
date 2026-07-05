// js/state/store.js
import { ApiService } from '../services/api.js';

export const Store = {
  questions: [],
  userProgress: {},
  mockTestState: {
    isActive: false,
    questions: [],
    answers: [],
    timeRemaining: 2400, // 40 minutes = 2400 seconds
    timerInterval: null,
    currentIndex: 0,
    isSubmitted: false
  },
  activeTab: 'practice',
  isAutoNextEnabled: false,
  practiceIndex: 0,

  async init() {
    // Load local settings
    const settings = JSON.parse(localStorage.getItem('db_exam_prep_settings')) || {};
    this.isAutoNextEnabled = settings.autoNext !== undefined ? settings.autoNext : false;
    
    // Attempt to load remote progress and questions
    try {
      const [dbProgress, dbCustomQs] = await Promise.all([
        ApiService.getProgress(),
        ApiService.getCustomQuestions()
      ]);
      this.userProgress = dbProgress;
      
      const localCustom = JSON.parse(localStorage.getItem('db_exam_prep_custom_questions')) || [];
      const deletedIds = JSON.parse(localStorage.getItem('db_exam_prep_deleted_question_ids')) || [];
      
      const res = await fetch('questions.json');
      let baseQuestions = await res.json();
      
      // Filter out deleted and merge custom
      baseQuestions = baseQuestions.filter(q => !deletedIds.includes(q.id));
      const combinedCustom = [...dbCustomQs, ...localCustom].filter(q => !deletedIds.includes(q.id));
      
      this.questions = [...baseQuestions, ...combinedCustom];
      
    } catch (e) {
      console.warn("Error initializing store", e);
      this.questions = [];
    }
  },

  async saveProgress(questionId, data) {
    if (!this.userProgress[questionId]) {
      this.userProgress[questionId] = { isFlagged: false };
    }
    this.userProgress[questionId] = { ...this.userProgress[questionId], ...data };
    
    const payload = {};
    payload[questionId] = this.userProgress[questionId];
    await ApiService.saveProgress(payload);
  },
  
  async saveSettings() {
    localStorage.setItem('db_exam_prep_settings', JSON.stringify({
      autoNext: this.isAutoNextEnabled
    }));
  }
};

window.AppStore = {
  getQuestions: () => Store.questions,
  getPracticeIndex: () => Store.practiceIndex,
  getUserProgress: () => Store.userProgress,
  getActiveTab: () => Store.activeTab,
  getMockState: () => Store.mockTestState
};
