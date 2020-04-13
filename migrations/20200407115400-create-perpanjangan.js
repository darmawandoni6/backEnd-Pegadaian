"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PERPANJANGANs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_PEMINJAMAN: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "pinjamans",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      JLH_HARI: {
        type: Sequelize.INTEGER
      },
      TGL_KEMBALI: {
        type: Sequelize.DATE
      },
      KET: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable("PERPANJANGANs");
  }
};
