'use strict';

module.exports = function(sequelize, DataTypes) {
  var KitchBdryGoods = sequelize.define('KitchBdryGoods', {
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
  KitchBdryGoods.associate = function (models) {
    // associations can be defined here
    KitchBdryGoods.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return KitchBdryGoods;
}