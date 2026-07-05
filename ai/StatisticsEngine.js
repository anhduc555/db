// StatisticsEngine.js - Computes per‑topic accuracy statistics from chat history

/**
 * Compute per‑topic accuracy statistics.
 *
 * Expected `history` format: an array of message objects, each optionally containing:
 *   - `topic`: string identifying the subject (e.g., "Normalization", "SQL Joins")
 *   - `isCorrect`: boolean indicating whether the AI's answer was correct for that topic
 *
 * The function aggregates total attempts and correct answers per topic and returns an
 * object mapping topic names to `{ correct, total, accuracy }`.
 */
export function computeTopicAccuracy(history) {
  const stats = {};
  if (!Array.isArray(history)) return stats;

  history.forEach(msg => {
    const { topic, isCorrect } = msg;
    if (!topic) return;
    if (!stats[topic]) {
      stats[topic] = { correct: 0, total: 0, accuracy: 0 };
    }
    stats[topic].total += 1;
    if (isCorrect) {
      stats[topic].correct += 1;
    }
    stats[topic].accuracy = stats[topic].total ? stats[topic].correct / stats[topic].total : 0;
  });

  return stats;
}
