// src/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'railway_management_system',
  connectionLimit: 10
});

module.exports = pool.promise();
