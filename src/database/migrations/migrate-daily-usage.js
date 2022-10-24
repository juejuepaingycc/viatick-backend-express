'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('daily', {
      dailyId: {
        allowNull: false,
        autoIncrement: true,
        field: 'daily_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('daily');
  },
};
