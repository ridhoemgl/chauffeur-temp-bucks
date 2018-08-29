'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAvailable:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});
  Driver.associate = function(models) {
    Driver.hasMany(models.Order)
    Driver.belongsToMany(models.Customer, { through: 'Order'} )
  };
  return Driver;
};