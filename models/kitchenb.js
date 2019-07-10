'use strict';
module.exports = (sequelize, DataTypes) => {
  const KitchenB = sequelize.define('KitchenB', {
    serNo: DataTypes.INTEGER,
    item: DataTypes.STRING,
    category: DataTypes.STRING,
    location: DataTypes.STRING,
    shelf: DataTypes.STRING,
    weight: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    qty: DataTypes.INTEGER,
    setMin: DataTypes.INTEGER
  }, {});
  KitchenB.associate = function(models) {
    // associations can be defined here
  };
  return KitchenB;
};