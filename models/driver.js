'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
  };
  return Driver;
};