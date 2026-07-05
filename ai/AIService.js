// AIService.js - Handles HTTP Communication with Backend API Gateway

export class AIService {
  constructor(jwtToken = '') {
    this.token = jwtToken;
    this.apiKey = '';
    this.apiUrl = 'http://localhost:3001/api/v1/chat';
    this.lastRequestTimestamp = 0;
  }

  /** Set the JWT Token. */
  setToken(token) {
    this.token = token;
  }

  /** Set the API Key. */
  setApiKey(key) {
    this.apiKey = key;
  }

  /**
   * Generates a response from the Backend API or Gemini API directly given the system context, chat history, and user message.
   */
  async generateResponse(systemContext, chatHistory, userMessage) {
    if (!this.apiKey) {
      return this.getMockResponse(userMessage);
    }

    // Build messages array in Gemini format
    const geminiMessages = [];
    geminiMessages.push({ role: 'user', parts: [{ text: systemContext }] });
    geminiMessages.push({ role: 'model', parts: [{ text: "Đã hiểu." }] });
    
    chatHistory.forEach(msg => {
      const role = msg.role === 'ai' ? 'model' : (msg.role === 'assistant' ? 'model' : 'user');
      geminiMessages.push({ role, parts: [{ text: msg.text }] });
    });
    
    // Append user message
    geminiMessages.push({ role: 'user', parts: [{ text: userMessage }] });

    const payload = {
      contents: geminiMessages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      }
    };

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;

    const attemptRequest = async () => {
      const now = Date.now();
      const elapsed = now - this.lastRequestTimestamp;
      if (elapsed < 1000) {
        await new Promise(res => setTimeout(res, 1000 - elapsed));
      }
      this.lastRequestTimestamp = Date.now();

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Gemini API Error:', errorData);
        if (response.status === 400 || response.status === 401 || response.status === 403) {
          throw new Error('API_KEY_INVALID');
        }
        if (response.status === 429) {
          throw new Error('RATE_LIMIT');
        }
        throw new Error('NETWORK_ERROR');
      }

      const data = await response.json();
      if (data && data.candidates && data.candidates.length > 0 && 
          data.candidates[0].content && data.candidates[0].content.parts && 
          data.candidates[0].content.parts.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('INVALID_RESPONSE_FORMAT');
      }
    };

    let attempt = 0;
    let backoff = 500;
    while (attempt < 3) {
      try {
        return await attemptRequest();
      } catch (err) {
        if (err.message === 'API_KEY_INVALID') {
          return "🚨 **Lỗi Xác Thực:** API Key của bạn không hợp lệ hoặc đã bị khóa. Hãy kiểm tra lại trong phần cấu hình.";
        }
        attempt++;
        if (attempt >= 3) {
          return "⚠️ Rất tiếc, tôi đang gặp sự cố kết nối tới Gemini API. Vui lòng thử lại sau.";
        }
        await new Promise(res => setTimeout(res, backoff));
        backoff *= 2;
      }
    }
  }

  getMockResponse(userMessage) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let reply = "Đây là câu trả lời mô phỏng từ Trợ lý AI do API Key chưa được cấu hình.\n\n";
        
        if (userMessage.toLowerCase().includes('giải thích')) {
          reply += "💡 **Giải thích:** Bạn vừa yêu cầu giải thích câu hỏi. Hệ thống ghi nhận bạn cần phân tích chi tiết. Vui lòng thiết lập API Key thật ở góc phải (🔑) để xem giải thích chính xác từ Gemini.";
        } else if (userMessage.toLowerCase().includes('tương tự')) {
          reply += "🔄 **Câu hỏi tương tự:** Dưới đây là một ví dụ mô phỏng về câu hỏi tương tự:\n- Câu hỏi: Đặc điểm của khóa chính (Primary Key) là gì?\n- Đáp án: Phải duy nhất và không được rỗng (NOT NULL).";
        } else {
          reply += `Bạn vừa nhắn: "${userMessage}".\n\nTôi đã nhận được ngữ cảnh trang web và tiến trình học tập của bạn. Hãy thiết lập API Key để tôi có thể hỗ trợ tốt nhất!`;
        }
        resolve(reply);
      }, 1000);
    });
  }
}
