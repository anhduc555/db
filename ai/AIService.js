// AIService.js - Handles HTTP Communication with Gemini API

export class AIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
  }

  /**
   * Sets the API Key dynamically.
   */
  setApiKey(key) {
    this.apiKey = key;
  }

  /**
   * Generates a response from the Gemini API given the chat history and system context.
   */
  async generateResponse(systemContext, chatHistory, userMessage) {
    if (!this.apiKey) {
      throw new Error('API_KEY_MISSING');
    }

    // Prepare payload
    const apiMessages = [
      { role: "user", parts: [{ text: systemContext }] },
      { role: "model", parts: [{ text: "Đã rõ. Tôi sẽ đóng vai chuyên gia CSDL và hỗ trợ người dùng." }] }
    ];
    
    // Map existing history
    chatHistory.forEach(msg => {
      apiMessages.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });
    
    // Add new message
    apiMessages.push({ role: "user", parts: [{ text: userMessage }] });

    const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: apiMessages,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      if (response.status === 400 && errorData.error?.message?.includes('API key not valid')) {
        throw new Error('API_KEY_INVALID');
      }
      throw new Error('NETWORK_ERROR');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }
}
