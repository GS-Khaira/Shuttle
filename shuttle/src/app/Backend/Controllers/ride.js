const { Op } = require('sequelize');
const Ride = require('../models/rides');

exports.postRide = async (req, res) => {
  const {
    from,
    to,
    date,
    time,
    luggage,
    redirection,
    price,
    comments,
    seats // optional: pass available seats from frontend if needed
  } = req.body;

  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: 'Not logged in' });
  }

  try {
    const ride = await Ride.create({
      from_location: from,
      to_location: to,
      ride_date: date,
      ride_time: time,
      luggage_accepted: luggage,
      redirection_allowed: redirection,
      price_per_seat: price,
      comments: comments || '',
      driver_id: userId,
      available_seats: seats || 1, // default to 1 if not provided
      status: 'active'
    });

    return res.status(201).json({
      success: true,
      rideId: ride.id,
      message: 'Ride posted successfully'
    });
  } catch (error) {
    console.error('Error creating ride:', error);
    return res.status(500).json({ success: false, error: 'Database error', message: error.message });
  }
}

exports.findRide = async (req, res) => {
  console.log(req.query);
  const { from, to, date } = req.query;

  // Basic validation
  if (!from || !to || !date) {
    return res.status(400).json({ error: 'from, to, and date are required fields.' });
  }

  try {
    const rides = await Ride.findAll({
    where: {
      from_location: from,
      to_location: to,
      ride_date: {
        [Op.gte]: date,
      },
      status: 'active',
    },
    order: [['ride_date', 'ASC'], ['ride_time', 'ASC']],
    attributes: [
        ['from_location', 'from'],
        ['to_location', 'to'],
        ['ride_date', 'date'],
        ['ride_time', 'time'],
        ['luggage_accepted', 'luggage'],
        ['redirection_allowed', 'redirection'],
        ['available_seats', 'seats'],
        ['price_per_seat', 'price'],
        'comments',
      ],
      raw: true, // Return plain JS objects, not Sequelize model instances
    });
    if (rides.length === 0) {
      return res.status(404).json({ message: 'No rides found for the given criteria.' });
    }

    res.status(200).json(rides);
  } catch (error) {
    console.error('Error fetching rides:', error);
    res.status(500).json({ error: 'An error occurred while searching for rides.' });
  }
}