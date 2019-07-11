'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenBs', [{
      serNo: 887755,
      item: "apples",
      category: "fruit",
      location: "dry goods",
      shelf: "5b",
      weight: "14 lbs",
      price: 34.99,
      qty: 30,
      setMin: 3
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenBs', [{
      serNo: 887755,
      item: "cilantro",
      category: "veg",
      location: "walk in fridge",
      shelf: "1c",
      weight: "24 oz",
      price: 9.99,
      qty: 22,
      setMin: 4
    }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('KitchenBs', null, {});

  }
};
