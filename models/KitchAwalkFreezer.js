'use strict';

module.exports = function(sequelize, DataTypes) {
  var KitchAwalkFreezer = sequelize.define('KitchAwalkFreezer', {
    SerNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'SerNo'
    },
    Item: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Item'
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Category'
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Location'
    },  
    Weight: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Weight'
      },
      Price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        field: 'Price'
      },
      Qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Qty'
      },
      SetMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'SetMin'
      },
  });
  KitchAwalkFreezer.associate = function (models) {
    // associations can be defined here
    KitchAwalkFreezer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return KitchAwalkFreezer;
}