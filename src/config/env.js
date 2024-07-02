// src/config/env.js
require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  ADMIN_API_KEY: process.env.ADMIN_API_KEY || 'your_admin_api_key'
};
