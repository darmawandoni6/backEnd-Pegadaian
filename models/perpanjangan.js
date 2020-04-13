"use strict";
module.exports = (sequelize, DataTypes) => {
  const PERPANJANGAN = sequelize.define(
    "PERPANJANGAN",
    {
      ID_PEMINJAMAN: DataTypes.INTEGER,
      JLH_HARI: DataTypes.INTEGER,
      TGL_KEMBALI: DataTypes.DATE,
      KET: DataTypes.TEXT
    },
    {}
  );
  PERPANJANGAN.associate = function (models) {
    // PERPANJANGAN.belongsTo(models.pinjaman, {
    //   foreignKey: "ID_PEMINJAMAN"
    // });
  };
  return PERPANJANGAN;
};
