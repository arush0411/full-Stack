module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    dateTime: DataTypes.DATE,
    location: DataTypes.STRING,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
  });
};
