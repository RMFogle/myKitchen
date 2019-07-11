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
      setMin: 5
    }], {});
  },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenAs', [{
       serNo: 983455,
       item: "chicken",
       category: "meat",
       location: "walk in freezer",
       shelf: "1A",
       weight: "32 lbs",
       price: 45.99,
       qty: 50,
       setMin: 10
     }], {});
   },

   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenAs', [{
       serNo: 887755,
       item: "cilantro",
       category: "veg",
       location: "walk in fridge",
       shelf: "3F",
       weight: "24 oz",
       price: 9.99,
       qty: 15,
       setMin: 3
     }], {});
   },

   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenAs', [{
       serNo: 777345,
       item: "apples",
       category: "fruit",
       location: "dry goods",
       shelf: "2E",
       weight: "12 lbs",
       price: 22.99,
       qty: 30,
       setMin: 7
     }], {});
   },

   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KitchenAs', [{
       serNo: 683218,
       item: "tuna",
       category: "seafood",
       location: "walk in freezer",
       shelf: "5C",
       weight: "30 lbs",
       price: 75.99,
       qty: 25,
       setMin: 5
     }], {});
   },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('KitcheAs', null, {});
    
  }
};
