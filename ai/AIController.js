// AIController.js - UI Controller for the AI Sidebar

import { AIService } from './AIService.js';
import { PromptManager } from './PromptManager.js';

export class AIController {
  constructor() {
    this.chatHistory = [];
    this.isAiTyping = false;
    
    // Initialize service
    const savedKey = localStorage.getItem('db_exam_prep_gemini_key');
    this.aiService = new AIService(savedKey);

    // Bind DOM Elements
    this.aiSidebar = document.getElementById('ai-sidebar');
    this.apiKeyModal = document.getElementById('api-key-modal');
    this.chatInput = document.getElementById('ai-chat-input');
    this.chatHistoryEl = document.getElementById('ai-chat-history');
    this.sendBtn = document.getElementById('ai-send-btn');
    this.apiKeyInput = document.getElementById('gemini-api-key');

    this.bindEvents();
    
    // Make controller methods available globally for inline HTML event handlers
    window.toggleAISidebar = this.toggleAISidebar.bind(this);
    window.openApiKeyModal = this.openApiKeyModal.bind(this);
    window.closeApiKeyModal = this.closeApiKeyModal.bind(this);
    window.saveApiKey = this.saveApiKey.bind(this);
    window.sendAiMessage = this.sendAiMessage.bind(this);
    window.askAI = this.askAI.bind(this);
  }

  bindEvents() {
    if (this.apiKeyInput) {
      const savedKey = localStorage.getItem('db_exam_prep_gemini_key');
      if (savedKey) this.apiKeyInput.value = savedKey;
    }
  }

  toggleAISidebar() {
    if (this.aiSidebar.classList.contains('hidden')) {
      this.aiSidebar.classList.remove('hidden');
      this.chatInput.focus();
      if (!localStorage.getItem('db_exam_prep_gemini_key')) {
        this.openApiKeyModal();
      }
    } else {
      this.aiSidebar.classList.add('hidden');
    }
  }

  openApiKeyModal() {
    this.apiKeyModal.classList.remove('hidden');
  }

  closeApiKeyModal() {
    this.apiKeyModal.classList.add('hidden');
  }

  saveApiKey() {
    const key = this.apiKeyInput.value.trim();
    if (key) {
      localStorage.setItem('db_exam_prep_gemini_key', key);
      this.aiService.setApiKey(key);
      window.showToast('Đã lưu API Key thành công!', 'success');
      this.closeApiKeyModal();
    } else {
      window.showToast('Vui lòng nhập API Key hợp lệ', 'error');
    }
  }

  getAppState() {
    // Collects state from the global app.js for now (until Phase 2 migration)
    return {
      activeTab: window.activeTab,
      currentQuestion: window.questions ? window.questions[window.practiceIndex] : null,
      userAnswer: window.questions && window.userProgress && window.questions[window.practiceIndex] 
        ? window.userProgress[window.questions[window.practiceIndex].id]?.answeredIndex 
        : null,
      isCorrect: window.questions && window.userProgress && window.questions[window.practiceIndex] 
        ? window.userProgress[window.questions[window.practiceIndex].id]?.isCorrect 
        : null
    };
  }

  async sendAiMessage() {
    const text = this.chatInput.value.trim();
    if (!text || this.isAiTyping) return;
    
    if (!this.aiService.apiKey) {
      this.openApiKeyModal();
      return;
    }

    this.appendMessage('user', text);
    this.chatInput.value = '';
    this.chatInput.style.height = '';
    
    const systemContext = PromptManager.getSystemContext(this.getAppState());
    
    // UI state
    this.isAiTyping = true;
    this.sendBtn.disabled = true;
    const indicatorId = this.showTypingIndicator();

    try {
      const replyText = await this.aiService.generateResponse(systemContext, this.chatHistory, text);
      
      this.removeTypingIndicator(indicatorId);
      this.isAiTyping = false;
      this.sendBtn.disabled = false;
      
      this.chatHistory.push({ role: 'user', text: text });
      this.chatHistory.push({ role: 'ai', text: replyText });
      
      this.appendMessage('ai', replyText);

    } catch (err) {
      console.error(err);
      this.removeTypingIndicator(indicatorId);
      this.isAiTyping = false;
      this.sendBtn.disabled = false;
      
      if (err.message === 'API_KEY_INVALID') {
        this.appendMessage('system', 'API Key không hợp lệ. Vui lòng kiểm tra lại cấu hình.');
        this.openApiKeyModal();
      } else {
        this.appendMessage('system', 'Không thể kết nối đến máy chủ AI. Vui lòng kiểm tra mạng của bạn.');
      }
    }
  }

  appendMessage(role, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-message ${role}`;
    
    let avatarHtml = role === 'user' 
      ? `<div class="ai-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>`
      : `<div class="ai-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg></div>`;
    
    const formattedText = text
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    msgDiv.innerHTML = `${avatarHtml}<div class="ai-bubble">${formattedText}</div>`;
    this.chatHistoryEl.appendChild(msgDiv);
    this.chatHistoryEl.scrollTop = this.chatHistoryEl.scrollHeight;
  }

  showTypingIndicator() {
    const id = 'typing-' + Date.now();
    const div = document.createElement('div');
    div.id = id;
    div.className = 'ai-message system';
    div.innerHTML = `
      <div class="ai-avatar"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg></div>
      <div class="typing-indicator">
        <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
      </div>
    `;
    this.chatHistoryEl.appendChild(div);
    this.chatHistoryEl.scrollTop = this.chatHistoryEl.scrollHeight;
    return id;
  }

  removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  askAI(actionType) {
    if (this.aiSidebar.classList.contains('hidden')) {
      this.toggleAISidebar();
    }
    
    const prompt = PromptManager.getQuickActionPrompt(actionType, this.getAppState());
    this.chatInput.value = prompt;
    this.sendAiMessage();
  }
}
