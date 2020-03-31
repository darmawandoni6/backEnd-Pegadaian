'use strict';
module.exports = (sequelize, DataTypes) => {
  const NASABAH = sequelize.define('NASABAH', {
    KTP: DataTypes.STRING,
    NASABAH: DataTypes.STRING,
    ALAMAT: DataTypes.TEXT,
    NO_TELP: DataTypes.STRING,
    STATUS: DataTypes.STRING
  }, {});
  NASABAH.associate = function(models) {
    // associations can be defined here
  };
  return NASABAH;
};