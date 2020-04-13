"use strict";
module.exports = (sequelize, DataTypes) => {
  const PEMBAYARAN = sequelize.define(
    "PEMBAYARAN",
    {
      ID_PEMINJAMAN: DataTypes.INTEGER,
      BUKTI_TRANS: DataTypes.STRING,
      TGL_TRANS: DataTypes.DATE,
      TOTAL: DataTypes.INTEGER,
    },
    {}
  );
  PEMBAYARAN.associate = function (models) {
    // associations can be defined here
    PEMBAYARAN.belongsTo(models.pinjaman, {
      foreignKey: "ID_PEMINJAMAN",
    });
  };
  return PEMBAYARAN;
};
