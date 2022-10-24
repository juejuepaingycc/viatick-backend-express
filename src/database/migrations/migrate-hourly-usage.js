'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hourly', {
      hourlyId: {
        allowNull: false,
        autoIncrement: true,
        field: 'hourly_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      time: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      energy_usage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dailyId: {
        allowNull: true,
        field: 'daily_id',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'daily',
          key: 'daily_id',
        },
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('hourly');
  },
};
