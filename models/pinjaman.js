"use strict";
module.exports = (sequelize, DataTypes) => {
  const pinjaman = sequelize.define(
    "pinjaman",
    {
      NO_PINJAMAN: DataTypes.STRING,
      ID_NAS: DataTypes.INTEGER,
      ID_BARANG: DataTypes.INTEGER,
      NILAI_MINIMAL: DataTypes.INTEGER,
      NILAI_MAXIMAL: DataTypes.INTEGER,
      PINJMAN: DataTypes.INTEGER,
      BUNGA: DataTypes.FLOAT,
      TGL_PINJAM: DataTypes.DATE,
      TGL_KEMBALI: DataTypes.DATE,
      TOT_PINJAMAN: DataTypes.INTEGER,
    },
    {}
  );
  pinjaman.associate = function (models) {
    pinjaman.belongsTo(models.NASABAH, {
      foreignKey: "ID_NAS",
    });
    pinjaman.belongsTo(models.barang, {
      foreignKey: "ID_BARANG",
    });
    pinjaman.hasMany(models.PERPANJANGAN, {
      foreignKey: "ID_PEMINJAMAN",
    });
    pinjaman.hasMany(models.PEMBAYARAN, {
      foreignKey: "ID_PEMINJAMAN",
    });
  };
  return pinjaman;
};
