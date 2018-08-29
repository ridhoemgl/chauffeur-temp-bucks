'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.STRING,
    isLogin: DataTypes.BOOLEAN
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};