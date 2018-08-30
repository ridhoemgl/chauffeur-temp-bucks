'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  const Customer = sequelize.define('Customer', {
    firstName:{
      type: DataTypes.STRING,
      validate:{
        isAlpha:{
          args: true,
          msg: 'first name only allow letters'
        }
      }
    },
    lastName:{
      type: DataTypes.STRING,
      validate:{
        isAlpha:{
          args: true,
          msg: 'last name only allow letters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail : {
          args: true,
          msg: 'wrong format email'
        },
        isEmailUnique(value, cb){
          Customer
            .findOne({
              where: {
                email: value,
                id:{
                  [Op.ne]: this.id
                }
              }
            })
            .then(function(customer) {
              if(customer){
                cb('email already taken')
              }else {
                cb()
              }
            })
            .catch(function(err) {
              cb(err.message)
            })
        }
      }
    },
    password:{
      type: DataTypes.STRING
    },
    phone:{
      type: DataTypes.STRING,
      validate:{
        len:{
          args: [11],
          msg: 'phone number minimal 11'
        }
      }
    },
    address:{
      type: DataTypes.STRING
    },
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
  };
  return Customer;
};