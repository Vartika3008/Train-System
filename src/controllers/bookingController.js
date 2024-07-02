// src/controllers/bookingController.js
const Booking = require('./models/Booking');

exports.bookSeat = async (req, res) => {
  const { trainId, source, destination } = req.body;
  const userId = req.user.userId;

  try {
    const availableSeats = await Booking.findAvailableSeats(trainId, source, destination);
    if (availableSeats <= 0) {
      return res.status(400).json({ message: 'No seats available' });
    }

    const bookingId = await Booking.create(userId, trainId, source, destination);
    res.status(201).json({ message: 'Seat booked successfully', bookingId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getBookingDetails = async (req, res) => {
  const { userId } = req.user;

  try {
    const bookings = await Booking.findByUser(userId);
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
