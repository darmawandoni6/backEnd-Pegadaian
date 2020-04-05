"use strict";
module.exports = (sequelize, DataTypes) => {
  const barang = sequelize.define(
    "barang",
    {
      MERK: DataTypes.STRING,
      BARANG: DataTypes.STRING,
      SPESIFIKASI: DataTypes.TEXT
    },
    {}
  );
  barang.associate = function(models) {
    // associations can be defined here
  };
  return barang;
};
