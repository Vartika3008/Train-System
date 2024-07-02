// src/controllers/trainController.js
const Train = require('./models/Train');

exports.getTrainsByRoute = async (req, res) => {
  const { source, destination } = req.query;

  try {
    const trains = await Train.findByRoute(source, destination);
    res.status(200).json(trains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
