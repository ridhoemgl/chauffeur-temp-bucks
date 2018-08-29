'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    role:{
      type: DataTypes.STRING,
      defaultValue: 'Customer'
    },
    isLogin:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Order)
    Customer.belongsToMany(models.Driver, { through: 'Order'} )
    // associations can be defined here
  };
  return Customer;
};