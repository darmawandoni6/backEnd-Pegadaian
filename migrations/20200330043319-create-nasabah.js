'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NASABAHs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      KTP: {
        type: Sequelize.STRING
      },
      NASABAH: {
        type: Sequelize.STRING
      },
      ALAMAT: {
        type: Sequelize.TEXT
      },
      NO_TELP: {
        type: Sequelize.STRING
      },
      STATUS: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('NASABAHs');
  }
};