'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Customers', [{
          "firstName": "Xenia",
          "lastName": "Hourstan",
          "email": "xhourstan0@nytimes.com",
          "password": "Am14hK0v",
          "phone": "460-818-7924",
          "address": "0 Old Gate Center",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Antonella",
          "lastName": "Schwant",
          "email": "aschwant1@godaddy.com",
          "password": "q5wA8T",
          "phone": "297-136-2049",
          "address": "441 Grover Park",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Nappy",
          "lastName": "Stive",
          "email": "nstive2@ifeng.com",
          "password": "BZAwwNpMnv",
          "phone": "305-624-5765",
          "address": "6 Butternut Parkway",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Karoly",
          "lastName": "Schwandermann",
          "email": "kschwandermann3@bloomberg.com",
          "password": "d7DmZS",
          "phone": "191-673-8718",
          "address": "813 Utah Place",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Alan",
          "lastName": "Embra",
          "email": "aembra4@1und1.de",
          "password": "qB8x0TDaP0Af",
          "phone": "752-487-6641",
          "address": "00768 Corben Alley",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Ethe",
          "lastName": "Bosworth",
          "email": "ebosworth5@163.com",
          "password": "Gu6gea4zm",
          "phone": "198-821-0520",
          "address": "83 Sundown Park",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Leandra",
          "lastName": "Kenan",
          "email": "lkenan6@multiply.com",
          "password": "qkfbDvd",
          "phone": "950-790-6431",
          "address": "21943 Clove Parkway",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Remington",
          "lastName": "Ponter",
          "email": "rponter7@zdnet.com",
          "password": "PdOrfeLqX2",
          "phone": "622-122-8455",
          "address": "082 Becker Avenue",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Aveline",
          "lastName": "Mulholland",
          "email": "amulholland8@amazon.com",
          "password": "aaa69ysUtLZN",
          "phone": "983-815-2406",
          "address": "48 Cardinal Parkway",
          createdAt: new Date,
          updatedAt: new Date
        }, {
          "firstName": "Dori",
          "lastName": "Gretham",
          "email": "dgretham9@salon.com",
          "password": "xUDOU5GOT3O",
          "phone": "778-116-9648",
          "address": "66288 Almo Park",
          createdAt: new Date,
          updatedAt: new Date
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
