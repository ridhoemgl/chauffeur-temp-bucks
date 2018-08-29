'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Drivers', 
        [{
          "firstName": "Lida",
          "lastName": "Hayton",
          "email": "lhayton0@infoseek.co.jp",
          age:20,
          "phone": "298-401-5864",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Ross",
          "lastName": "Shaudfurth",
          "email": "rshaudfurth1@amazon.com",
          age:20,
          "phone": "322-800-8889",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Saba",
          "lastName": "Baccas",
          "email": "sbaccas2@pcworld.com",
          age:20,
          "phone": "956-225-4427",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Aileen",
          "lastName": "MacVanamy",
          "email": "amacvanamy3@reverbnation.com",
          age:20,
          "phone": "347-698-6602",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Debbi",
          "lastName": "Hocking",
          "email": "dhocking4@engadget.com",
          age:20,
          "phone": "915-830-3398",
          createdAt: new Date,
          updatedAt: new Date
        }], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Drivers', null, {});
  }
};
