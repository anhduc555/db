// PromptBuilder.js - Orchestrates prompt creation using ContextBuilder, MemoryManager, and StatisticsEngine utilities

import { ContextBuilder } from './ContextBuilder.js';
import { computeTopicAccuracy } from './StatisticsEngine.js';

export class PromptBuilder {
  /** Build the system‑prompt string from the raw page context, enriched with per‑topic statistics. */
  static buildSystemContext(rawContext, history = []) {
    const baseContext = ContextBuilder.buildSystemContext(rawContext);
    const stats = computeTopicAccuracy(history);
    const statsSection = `\nStatistics:\n${JSON.stringify(stats, null, 2)}`;
    return baseContext + statsSection;
  }

  /** Build a quick‑action prompt for a given action type. */
  static buildActionPrompt(actionType, rawContext) {
    return ContextBuilder.buildActionPrompt(actionType, rawContext);
  }

  /** Optionally trim the chat history to a maximum length (fallback). */
  static trimHistory(history, maxMessages = 20) {
    if (!Array.isArray(history)) return [];
    if (history.length <= maxMessages) return history;
    return history.slice(history.length - maxMessages);
  }
}
