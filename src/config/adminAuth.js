// src/config/adminAuth.js
const { ADMIN_API_KEY } = require('./env');

module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey !== ADMIN_API_KEY) return res.status(403).json({ message: 'Access denied.' });
  next();
};
