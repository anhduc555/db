import express from 'express';
import { rateLimit } from '../middleware/rateLimit.js';
import { verifyToken } from '../middleware/auth.js';
import { handleChat } from '../services/aiGateway.js';
import UserProgress from '../models/UserProgress.js';
import CustomQuestion from '../models/CustomQuestion.js';
import sequelize from '../config/database.js';

const router = express.Router();

// Apply rate limiting to all API routes
router.use(rateLimit);

// Sync Database (in a real app, do this separately, but keeping here for simplicity)
sequelize.sync().catch(err => console.error('DB Sync Error:', err));

// Example protected endpoint for AI chat
router.post('/chat', async (req, res, next) => {
  // temporarily bypass verifyToken for testing
  try {
    const { messages, userMessage } = req.body;
    const clientApiKey = req.headers['x-api-key'] || null;
    const response = await handleChat(messages, userMessage, clientApiKey);
    res.json({ reply: response });
  } catch (err) {
    next(err);
  }
});

// Progress Routes
router.get('/progress', async (req, res) => {
  try {
    const progress = await UserProgress.findAll();
    const result = {};
    progress.forEach(p => {
      result[p.questionId] = {
        answeredIndex: p.answeredIndex,
        isCorrect: p.isCorrect,
        isFlagged: p.isFlagged
      };
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

router.post('/progress', async (req, res) => {
  try {
    const progressData = req.body; // Expecting { questionId: { answeredIndex, isCorrect, isFlagged } }
    const promises = Object.keys(progressData).map(async (qId) => {
      const data = progressData[qId];
      await UserProgress.upsert({
        questionId: parseInt(qId, 10),
        ...data
      });
    });
    await Promise.all(promises);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// Custom Questions Routes
router.get('/custom-questions', async (req, res) => {
  try {
    const questions = await CustomQuestion.findAll();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch custom questions' });
  }
});

router.post('/custom-questions', async (req, res) => {
  try {
    const newQuestion = await CustomQuestion.create(req.body);
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create question' });
  }
});

export default router;

