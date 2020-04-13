"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pinjamans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NO_PINJAMAN: {
        type: Sequelize.STRING
      },
      ID_NAS: {
        type: Sequelize.INTEGER,
        llowNull: false,
        references: {
          model: "NASABAHs",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      ID_BARANG: {
        type: Sequelize.INTEGER,
        llowNull: false,
        references: {
          model: "barangs",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      NILAI_MINIMAL: {
        type: Sequelize.INTEGER
      },
      NILAI_MAXIMAL: {
        type: Sequelize.INTEGER
      },
      PINJMAN: {
        type: Sequelize.INTEGER
      },
      BUNGA: {
        type: Sequelize.FLOAT
      },
      TGL_PINJAM: {
        type: Sequelize.DATE
      },
      TGL_KEMBALI: {
        type: Sequelize.DATE
      },
      TOT_PINJAMAN: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pinjamans");
  }
};
