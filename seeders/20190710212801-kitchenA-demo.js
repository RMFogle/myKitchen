'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('KitchenAs', [{
      serNo: 887755,
      item: "squash",
      category: "veg",
      location: "dry goods",
      shelf: "2b",
      weight: "12 lbs",
      price: 12.99,
      qty: 20,
      setMin: 5,

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('KitcheAs', null, {});
    
  }
};
