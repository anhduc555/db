// server/middleware/rateLimit.js - Simple rate limiter (1 request per second per IP)

let lastRequestTime = 0;

export function rateLimit(req, res, next) {
  const now = Date.now();
  if (now - lastRequestTime < 1000) {
    res.status(429).json({ error: 'Too many requests - please wait a moment.' });
    return;
  }
  lastRequestTime = now;
  next();
}
