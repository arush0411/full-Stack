const Sequelize = require('sequelize');
const config = require('../config/config').development;

const sequelize = new Sequelize(config);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Event = require('./event')(sequelize, Sequelize);
db.Booking = require('./booking')(sequelize, Sequelize);

db.User.hasMany(db.Booking);
db.Event.hasMany(db.Booking);
db.Booking.belongsTo(db.User);
db.Booking.belongsTo(db.Event);

module.exports = db;
