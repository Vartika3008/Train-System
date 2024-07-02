// src/models/Train.js
const db = require('../config/db');

class Train {
  static async create(trainName, source, destination, totalSeats) {
    const [result] = await db.execute('INSERT INTO trains (trainName, source, destination, totalSeats) VALUES (?, ?, ?, ?)', [trainName, source, destination, totalSeats]);
    return result.insertId;
  }

  static async findByRoute(source, destination) {
    const [rows] = await db.execute('SELECT * FROM trains WHERE source = ? AND destination = ?', [source, destination]);
    return rows;
  }

  static async updateSeats(trainId, totalSeats) {
    await db.execute('UPDATE trains SET totalSeats = ? WHERE id = ?', [totalSeats, trainId]);
  }
}

module.exports = Train;
