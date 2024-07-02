// src/models/Booking.js
const db = require('../config/db');

class Booking {
  static async create(userId, trainId, source, destination) {
    const [result] = await db.execute('INSERT INTO bookings (userId, trainId, source, destination) VALUES (?, ?, ?, ?)', [userId, trainId, source, destination]);
    return result.insertId;
  }

  static async findByUser(userId) {
    const [rows] = await db.execute('SELECT * FROM bookings WHERE userId = ?', [userId]);
    return rows;
  }

  static async findAvailableSeats(trainId, source, destination) {
    const [result] = await db.execute(`
      SELECT 
        t.totalSeats - COUNT(b.id) AS availableSeats
      FROM 
        trains t
      LEFT JOIN 
        bookings b 
      ON 
        t.id = b.trainId 
      WHERE 
        t.id = ? 
      AND 
        b.source = ? 
      AND 
        b.destination = ?`, [trainId, source, destination]);
    return result[0].availableSeats;
  }
}

module.exports = Booking;
