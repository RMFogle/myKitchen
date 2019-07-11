'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        username: "Omar10",
        password: "codeisbroken",
        email: "test@gmail.com"
      }], {});
  
  },
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      username: "Omar12",
      password: "codeisbroken",
      email: "test@gmail.com"
    }], {});

},

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});
  }
};
