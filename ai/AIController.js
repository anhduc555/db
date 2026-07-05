// AIController.js - UI Controller for the AI Sidebar with secure API key handling

import { AIService } from './AIService.js';
import { PageContextCollector } from './PageContextCollector.js';
import { PromptBuilder } from './PromptBuilder.js';
import { MemoryManager } from './MemoryManager.js';

export class AIController {
  constructor() {
    this.isAiTyping = false;
    this.memory = new MemoryManager({ maxMessages: 30 });

    // Initialize AI service with a mock JWT token for now
    // In the future, this token will be fetched during user login
    const dummyToken = 'mock_jwt_token';
    this.aiService = new AIService(dummyToken);

    this.plainApiKey = dummyToken; // To bypass legacy checks for now

    // Bind DOM Elements
    this.aiSidebar = document.getElementById('ai-sidebar');
    this.apiKeyModal = document.getElementById('api-key-modal');
    this.chatInput = document.getElementById('ai-chat-input');
    this.chatHistoryEl = document.getElementById('ai-chat-history');
    this.sendBtn = document.getElementById('ai-send-btn');
    this.apiKeyInput = document.getElementById('gemini-api-key');

    // Load saved API key
    const savedKey = localStorage.getItem('db_exam_prep_gemini_key');
    if (savedKey) {
      this.plainApiKey = savedKey;
      this.aiService.setApiKey(savedKey);
      if (this.apiKeyInput) this.apiKeyInput.value = savedKey;
    }

    this.bindEvents();
+
+    this.bindEvents();

    // Global shortcut: Ctrl+Space toggles AI sidebar
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'Space') {
        e.preventDefault();
        this.toggleAISidebar();
      }
    });
    
    // Expose controller methods globally if needed elsewhere
    window.toggleAISidebar = this.toggleAISidebar.bind(this);
    window.openApiKeyModal = this.openApiKeyModal.bind(this);
    window.closeApiKeyModal = this.closeApiKeyModal.bind(this);
    window.saveApiKey = this.saveApiKey.bind(this);
    window.sendAiMessage = this.sendAiMessage.bind(this);
    window.askAI = this.askAI.bind(this);
  }

  bindEvents() {
    if (this.apiKeyInput) {
      // Input already populated in constructor if savedKey exists
    }
    
    // Bind AI buttons
    if (this.sendBtn) this.sendBtn.addEventListener('click', () => this.sendAiMessage());
    
    const floatingBtn = document.getElementById('aiFloatingBtn');
    if (floatingBtn) floatingBtn.addEventListener('click', () => this.toggleAISidebar());
    
    const toggleBtn = document.getElementById('ai-toggle-btn');
    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleAISidebar());
    
    const closeBtn = document.querySelector('.ai-sidebar-header .ai-icon-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.toggleAISidebar());
    
    // Suggestion buttons
    const suggestBtns = document.querySelectorAll('.ai-suggestion-btn');
    if (suggestBtns.length >= 3) {
      suggestBtns[0].addEventListener('click', () => this.askAI('explain'));
      suggestBtns[1].addEventListener('click', () => this.askAI('similar'));
      suggestBtns[2].addEventListener('click', () => this.askAI('roadmap'));

      // Listen to tab changes to hide/show context-specific suggestions
      window.addEventListener('tabChanged', (e) => {
        const tabId = e.detail.tabId;
        if (tabId === 'bank') {
          suggestBtns[0].style.display = 'none';
          suggestBtns[1].style.display = 'none';
        } else {
          suggestBtns[0].style.display = 'inline-block';
          suggestBtns[1].style.display = 'inline-block';
        }
      });
    }
    
    // Practice screen AI explain button
    const practiceAIBtn = document.getElementById('practice-ai-btn');
    if (practiceAIBtn) practiceAIBtn.addEventListener('click', () => this.askAI('explain'));
  }

  toggleAISidebar() {
    if (this.aiSidebar.classList.contains('hidden')) {
      this.aiSidebar.classList.remove('hidden');
      this.chatInput.focus();
      // Bypass API key modal check since we use backend auth
      // if (!this.plainApiKey) {
      //   this.openApiKeyModal();
      // }
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

  // Compute SHA‑256 hash and return hex string
  async hashKey(key) {
    const enc = new TextEncoder();
    const data = enc.encode(key);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async saveApiKey() {
    const key = this.apiKeyInput.value.trim();
    if (!key) {
      window.showToast('Vui lòng nhập API Key hợp lệ', 'error');
      return;
    }
    
    // Save plain key directly for ease of use
    localStorage.setItem('db_exam_prep_gemini_key', key);
    
    this.plainApiKey = key;
    this.aiService.setApiKey(key);
    window.showToast('Đã lưu API Key thành công!', 'success');
    this.closeApiKeyModal();
  }

  async verifyApiKey(key) {
    const hash = await this.hashKey(key);
    return this.storedKeyHash && hash === this.storedKeyHash;
  }

  async sendAiMessage() {
    const text = this.chatInput.value.trim();
    if (!text || this.isAiTyping) return;

    // Bypass API key modal check
    // if (!this.plainApiKey) {
    //   this.openApiKeyModal();
    //   return;
    // }

    this.appendMessage('user', text);
    this.chatInput.value = '';
    this.chatInput.style.height = '';

    const rawContext = PageContextCollector.collect();
    const recentHistory = PromptBuilder.trimHistory(this.memory.getHistory(), 20);
    const systemContext = PromptBuilder.buildSystemContext(rawContext, recentHistory);

    // UI state
    this.isAiTyping = true;
    this.sendBtn.disabled = true;
    const indicatorId = this.showTypingIndicator();

    try {
      const replyText = await this.aiService.generateResponse(systemContext, recentHistory, text);

      this.removeTypingIndicator(indicatorId);
      this.isAiTyping = false;
      this.sendBtn.disabled = false;

      // Persist both sides of the exchange
      this.memory.addMessage('user', text);
      this.memory.addMessage('ai', replyText);

      this.appendMessage('ai', replyText);
    } catch (err) {
      console.error(err);
      this.removeTypingIndicator(indicatorId);
      this.isAiTyping = false;
      this.sendBtn.disabled = false;

      if (err.message === 'AUTH_ERROR' || err.message === 'API_KEY_INVALID') {
        this.appendMessage('system', 'Lỗi xác thực: API Key không hợp lệ hoặc bị thiếu. Vui lòng kiểm tra lại cấu hình Backend.');
      } else if (err.message === 'RATE_LIMIT') {
        this.appendMessage('system', 'Bạn đã gửi yêu cầu quá nhanh. Vui lòng đợi một lát.');
      } else if (err.message === 'TIMEOUT_ERROR') {
        this.appendMessage('system', 'Yêu cầu tới máy chủ AI quá thời gian chờ. Vui lòng thử lại.');
      } else if (err.message === 'INVALID_RESPONSE_FORMAT') {
        this.appendMessage('system', 'Máy chủ AI trả về phản hồi không hợp lệ. Vui lòng thử lại.');
      } else {
        this.appendMessage('system', 'Không thể kết nối đến máy chủ AI. Vui lòng kiểm tra mạng của bạn hoặc đảm bảo Backend API đang chạy.');
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
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
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
    
    const rawContext = PageContextCollector.collect();
    const prompt = PromptBuilder.buildActionPrompt(actionType, rawContext);
    
    this.chatInput.value = prompt;
    this.sendAiMessage();
  }
}
