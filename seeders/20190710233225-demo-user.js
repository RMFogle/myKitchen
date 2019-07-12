'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        username: "Omar12",
        password: "codeisbroken",
        email: "test2@gmail.com", 
        createdAt: new Date(), 
        updatedAt: new Date()
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});
  }
};
