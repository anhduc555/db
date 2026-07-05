import { MemoryManager } from '../ai/MemoryManager.js';

// Mock localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    removeItem: function(key) {
      delete store[key];
    },
    clear: function() {
      store = {};
    }
  };
})();
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('MemoryManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize empty if no storage', () => {
    const memory = new MemoryManager();
    expect(memory.getHistory()).toEqual([]);
  });

  it('should add message and save to storage', () => {
    const memory = new MemoryManager();
    memory.addMessage('user', 'Hello');
    expect(memory.getHistory()).toHaveLength(1);
    expect(memory.getHistory()[0].text).toBe('Hello');
    expect(JSON.parse(localStorage.getItem('db_exam_ai_memory'))).toHaveLength(1);
  });

  it('should trim history if it exceeds maxMessages', () => {
    const memory = new MemoryManager({ maxMessages: 2 });
    memory.addMessage('user', 'Msg 1');
    memory.addMessage('ai', 'Msg 2');
    memory.addMessage('user', 'Msg 3');
    
    const history = memory.getHistory();
    expect(history).toHaveLength(2);
    expect(history[0].text).toBe('Msg 2');
    expect(history[1].text).toBe('Msg 3');
  });
});
