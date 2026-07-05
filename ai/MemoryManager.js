// MemoryManager.js - Handles session chat memory and persistence

/**
 * Provides a simple in‑memory chat log that is persisted to localStorage.
 * The log is stored under the namespace "db_exam_ai_memory" and contains
 * an array of messages: { role: 'user' | 'ai' | 'system', text: string }.
 *
 * The manager also offers a sliding‑window mechanism to keep the total
 * token count (approx.) under a configurable limit. This prevents the
 * request payload from growing indefinitely as the user keeps chatting.
 */
export class MemoryManager {
  constructor({ maxMessages = 20 } = {}) {
    this.storageKey = 'db_exam_ai_memory';
    this.maxMessages = maxMessages; // keep the most recent N messages
    this.chatHistory = [];
    this.load();
  }

  /** Load persisted history from localStorage (if any). */
  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.chatHistory = parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load AI memory:', e);
      this.chatHistory = [];
    }
  }

  /** Persist current history to localStorage. */
  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.chatHistory));
    } catch (e) {
      console.warn('Failed to save AI memory:', e);
    }
  }

  /** Add a new message and keep history within limits. */
  addMessage(role, text) {
    if (!role || typeof text !== 'string') return;
    this.chatHistory.push({ role, text });
    // Trim oldest entries if we exceed the limit
    while (this.chatHistory.length > this.maxMessages) {
      this.chatHistory.shift();
    }
    this.save();
  }

  /** Return a shallow copy of the current history. */
  getHistory() {
    return [...this.chatHistory];
  }

  /** Clear all stored messages (useful for debugging). */
  clear() {
    this.chatHistory = [];
    localStorage.removeItem(this.storageKey);
  }
}
