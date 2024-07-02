// src/controllers/adminController.js
const Train = require('./models/Train');

exports.addTrain = async (req, res) => {
  const { trainName, source, destination, totalSeats } = req.body;

  try {
    const trainId = await Train.create(trainName, source, destination, totalSeats);
    res.status(201).json({ message: 'Train added successfully', trainId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateSeats = async (req, res) => {
  const { trainId } = req.params;
  const { totalSeats } = req.body;

  try {
    await Train.updateSeats(trainId, totalSeats);
    res.status(200).json({ message: 'Seats updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
