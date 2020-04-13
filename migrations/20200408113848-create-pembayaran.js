"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PEMBAYARANs", {
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
      BUKTI_TRANS: {
        type: Sequelize.STRING
      },
      TGL_TRANS: {
        type: Sequelize.DATE
      },
      TOTAL: {
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
    return queryInterface.dropTable("PEMBAYARANs");
  }
};
