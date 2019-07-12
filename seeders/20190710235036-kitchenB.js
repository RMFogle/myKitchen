'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenBs', [{
      serNo: 547755,
      item: "cheese",
      category: "dairy",
      location: "walk in fridge",
      shelf: "5A",
      weight: "5 lbs",
      price: 29.99,
      qty: 24,
      setMin: 5,
      createdAt: new Date(), 
      updatedAt: new Date()
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('KitchenBs', null, {});

  }
};
