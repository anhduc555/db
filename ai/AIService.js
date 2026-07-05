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
   * Generates a response from the Backend API given the system context, chat history, and user message.
   */
  async generateResponse(systemContext, chatHistory, userMessage) {
    // Build messages array
    const messages = [];
    messages.push({ role: 'system', content: systemContext });
    chatHistory.forEach(msg => {
      const role = msg.role === 'ai' ? 'assistant' : (msg.role === 'assistant' ? 'assistant' : 'user');
      messages.push({ role, content: msg.text });
    });

    const payload = {
      messages: messages,
      userMessage: userMessage
    };

    const attemptRequest = async () => {
      const now = Date.now();
      const elapsed = now - this.lastRequestTimestamp;
      if (elapsed < 1000) {
        await new Promise(res => setTimeout(res, 1000 - elapsed));
      }
      this.lastRequestTimestamp = Date.now();

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
          'x-api-key': this.apiKey || ''
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Backend API Error:', errorData);
        if (response.status === 401 || response.status === 403) {
          throw new Error('AUTH_ERROR');
        }
        if (response.status === 429) {
          throw new Error('RATE_LIMIT');
        }
        throw new Error('NETWORK_ERROR');
      }

      const data = await response.json();
      return data.reply || '';
    };

    let attempt = 0;
    let backoff = 200;
    while (attempt < 3) {
      try {
        return await attemptRequest();
      } catch (err) {
        if (err.message === 'AUTH_ERROR') throw err; // Don't retry auth errors
        attempt++;
        if (attempt >= 3) {
          throw err;
        }
        await new Promise(res => setTimeout(res, backoff));
        backoff *= 2;
      }
    }
  }
}
