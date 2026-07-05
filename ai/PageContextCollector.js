// PageContextCollector.js - Collects current context from the global AppStore and DOM

export class PageContextCollector {
  static collect() {
    if (!window.AppStore) {
      console.warn("AppStore is not exposed. AI cannot read context.");
      return null;
    }

    const activeTab = window.AppStore.getActiveTab();
    const questions = window.AppStore.getQuestions() || [];
    const userProgress = window.AppStore.getUserProgress() || {};
    const mockState = window.AppStore.getMockState() || {};

    let contextData = {
      activeTab,
      totalQuestions: questions.length,
      answeredCount: Object.keys(userProgress).length,
      currentQuestion: null,
      userAnswer: null,
      isCorrect: null
    };

    if (activeTab === 'practice') {
      const pIndex = window.AppStore.getPracticeIndex();
      if (questions[pIndex]) {
        const q = questions[pIndex];
        contextData.currentQuestion = q;
        const progress = userProgress[q.id];
        if (progress) {
          contextData.userAnswer = progress.answeredIndex;
          contextData.isCorrect = progress.isCorrect;
        }
      }
    } else if (activeTab === 'mock') {
      if (mockState.isActive && mockState.questions) {
        const idx = mockState.currentIndex;
        if (mockState.questions[idx]) {
          contextData.currentQuestion = mockState.questions[idx];
          contextData.userAnswer = mockState.answers[idx];
          contextData.isCorrect = null; // Don't know correctness during active mock
        }
      }
    }

    return contextData;
  }
}
