import { computeTopicAccuracy } from '../ai/StatisticsEngine.js';

describe('StatisticsEngine', () => {
  it('should return an empty object for empty history', () => {
    expect(computeTopicAccuracy([])).toEqual({});
  });

  it('should correctly compute accuracy for a single topic', () => {
    const history = [
      { topic: 'SQL', isCorrect: true },
      { topic: 'SQL', isCorrect: false },
      { topic: 'SQL', isCorrect: true },
    ];
    const stats = computeTopicAccuracy(history);
    expect(stats.SQL).toBeDefined();
    expect(stats.SQL.total).toBe(3);
    expect(stats.SQL.correct).toBe(2);
    expect(stats.SQL.accuracy).toBeCloseTo(0.666, 2);
  });

  it('should ignore messages without a topic', () => {
    const history = [
      { text: 'Hello' },
      { topic: 'Normalization', isCorrect: true },
    ];
    const stats = computeTopicAccuracy(history);
    expect(Object.keys(stats)).toHaveLength(1);
    expect(stats.Normalization.total).toBe(1);
  });
});
