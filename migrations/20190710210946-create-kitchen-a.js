'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('KitchenAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serNo: {
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      shelf: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      qty: {
        type: Sequelize.INTEGER
      },
      setMin: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('KitchenAs');
  }
};