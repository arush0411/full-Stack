const { Booking, Event } = require('../models');

exports.book = async (req, res) => {
  const event = await Event.findByPk(req.params.eventId);
  if (event.availableSeats < 1)
    return res.status(400).json({ message: 'No seats available' });

  await event.decrement('availableSeats');
  const booking = await Booking.create({ userId: req.user.id, eventId: event.id });
  res.json(booking);
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.findAll({ where: { userId: req.user.id }, include: 'Event' });
  res.json(bookings);
};

exports.cancel = async (req, res) => {
  const booking = await Booking.findByPk(req.params.id);
  if (booking.userId !== req.user.id) return res.status(403).json({ message: 'Not allowed' });

  await Event.increment('availableSeats', { where: { id: booking.eventId } });
  await booking.destroy();
  res.json({ message: 'Cancelled' });
};
