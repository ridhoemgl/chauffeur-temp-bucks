'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER,
    DriverId: DataTypes.INTEGER,
    transactionDate: DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer)
    Order.belongsTo(models.Driver)
  };
  return Order;
};