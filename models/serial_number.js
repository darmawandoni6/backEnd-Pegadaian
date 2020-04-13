'use strict';
module.exports = (sequelize, DataTypes) => {
  const SERIAL_NUMBER = sequelize.define('SERIAL_NUMBER', {
    NAME: DataTypes.STRING,
    NO_URUT: DataTypes.INTEGER
  }, {});
  SERIAL_NUMBER.associate = function(models) {
    // associations can be defined here
  };
  return SERIAL_NUMBER;
};