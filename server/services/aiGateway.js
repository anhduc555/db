import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

/**
 * Handles LLM interaction with Retry and Timeout logic
 * @param {Array} messages - Chat history
 * @param {string} userMessage - New user message
 * @param {string} [clientApiKey] - Optional API key provided by the client
 */
export async function handleChat(messages, userMessage, clientApiKey = null) {
  const activeKey = clientApiKey || process.env.API_KEY;
  const isMock = !activeKey || activeKey === 'your_secure_gemini_api_key_here';
  
  console.log(`[AI Request] Mode: ${isMock ? 'MOCK' : 'GEMINI_API'} | Messages: ${messages.length + 1} | User Message: "${userMessage.substring(0, 30)}..."`);

  if (isMock) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let reply = "Đây là câu trả lời mô phỏng từ Trợ lý AI do API Key chưa được cấu hình.\n\n";
        
        if (userMessage.toLowerCase().includes('giải thích')) {
          reply += "💡 **Giải thích:** Bạn vừa yêu cầu giải thích câu hỏi. Hệ thống ghi nhận bạn cần phân tích chi tiết. Vui lòng thêm API Key thật để xem giải thích chính xác từ Gemini.";
        } else if (userMessage.toLowerCase().includes('tương tự')) {
          reply += "🔄 **Câu hỏi tương tự:** Dưới đây là một ví dụ mô phỏng về câu hỏi tương tự:\n- Câu hỏi: Đặc điểm của khóa chính (Primary Key) là gì?\n- Đáp án: Phải duy nhất và không được rỗng (NOT NULL).";
        } else {
          reply += `Bạn vừa nhắn: "${userMessage}".\n\nTôi đã nhận được ngữ cảnh trang web và tiến trình học tập của bạn. Hãy thiết lập API Key để tôi có thể hỗ trợ tốt nhất!`;
        }
        
        console.log(`[AI Response] Successfully returned mock response.`);
        resolve(reply);
      }, 1500);
    });
  }

  // Real Gemini API Integration
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`;
  
  // Transform messages to Gemini format
  const geminiMessages = messages.map(msg => ({
    role: msg.role === 'assistant' || msg.role === 'model' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));
  
  // Append user message
  geminiMessages.push({ role: 'user', parts: [{ text: userMessage }] });

  const payload = {
    contents: geminiMessages,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    }
  };

  const MAX_RETRIES = 3;
  const TIMEOUT_MS = 15000; // 15 seconds timeout

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      console.log(`[AI Request] Attempt ${attempt}/${MAX_RETRIES} to Gemini API...`);
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`[AI API Error] Attempt ${attempt} failed: Status ${response.status}`, errorData);
        
        if (response.status === 400 || response.status === 403 || response.status === 401) {
          throw Object.assign(new Error('API_KEY_INVALID'), { status: response.status });
        }
        
        if (response.status === 429) {
          // Rate limited by Gemini, wait longer before retry
          await new Promise(r => setTimeout(r, 2000 * attempt));
          continue;
        }

        if (attempt === MAX_RETRIES) {
          throw Object.assign(new Error('NETWORK_ERROR'), { status: response.status });
        }
        
        await new Promise(r => setTimeout(r, 1000 * attempt));
        continue;
      }

      const data = await response.json();
      
      // Response Validation
      if (data && data.candidates && data.candidates.length > 0 && 
          data.candidates[0].content && data.candidates[0].content.parts && 
          data.candidates[0].content.parts.length > 0) {
        
        console.log(`[AI Response] Successfully received response from Gemini API.`);
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('INVALID_RESPONSE_FORMAT');
      }

    } catch (err) {
      if (err.name === 'AbortError') {
        console.error(`[AI API Error] Attempt ${attempt} timed out after ${TIMEOUT_MS}ms.`);
        if (attempt === MAX_RETRIES) throw new Error('TIMEOUT_ERROR');
      } else if (err.message === 'API_KEY_INVALID') {
        throw err; // Do not retry invalid keys
      } else {
        console.error(`[AI API Error] Attempt ${attempt} threw:`, err.message);
        if (attempt === MAX_RETRIES) throw err;
      }
      // Wait before retry
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}
