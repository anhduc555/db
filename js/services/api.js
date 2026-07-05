// api.js - Service for communicating with the backend Express API

const BASE_URL = 'http://localhost:3001/api/v1';

export const ApiService = {
  async getProgress() {
    try {
      const response = await fetch(`${BASE_URL}/progress`);
      if (!response.ok) throw new Error('Failed to fetch progress');
      return await response.json();
    } catch (err) {
      console.warn('Backend unavailable, falling back to local storage', err);
      return JSON.parse(localStorage.getItem('db_exam_prep_progress')) || {};
    }
  },

  async saveProgress(progressData) {
    // Save to local storage as fallback
    try {
      const existing = JSON.parse(localStorage.getItem('db_exam_prep_progress')) || {};
      const merged = { ...existing, ...progressData };
      localStorage.setItem('db_exam_prep_progress', JSON.stringify(merged));
    } catch(e) {
      console.warn("Could not save to localStorage", e);
    }
    
    // Sync to backend asynchronously
    try {
      await fetch(`${BASE_URL}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(progressData)
      });
    } catch (err) {
      console.warn('Backend unavailable, progress saved locally only', err);
    }
  },

  async getCustomQuestions() {
    try {
      const response = await fetch(`${BASE_URL}/custom-questions`);
      if (!response.ok) throw new Error('Failed to fetch custom questions');
      return await response.json();
    } catch (err) {
      console.warn('Backend unavailable, falling back to local storage', err);
      return JSON.parse(localStorage.getItem('db_exam_prep_custom_questions')) || [];
    }
  },

  async saveCustomQuestion(questionData) {
    try {
      const response = await fetch(`${BASE_URL}/custom-questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionData)
      });
      if (!response.ok) throw new Error('Failed to save question to DB');
      return await response.json();
    } catch (err) {
      console.warn('Backend unavailable, saving locally only', err);
      const customQuestions = JSON.parse(localStorage.getItem('db_exam_prep_custom_questions')) || [];
      customQuestions.push(questionData);
      localStorage.setItem('db_exam_prep_custom_questions', JSON.stringify(customQuestions));
      return questionData;
    }
  }
};
