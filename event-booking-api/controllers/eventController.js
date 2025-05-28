const { Event } = require('../models');

exports.getAll = async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
};

exports.getOne = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  res.json(event);
};

exports.create = async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
};

exports.update = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  await event.update(req.body);
  res.json(event);
};

exports.remove = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  await event.destroy();
  res.json({ message: 'Deleted' });
};
