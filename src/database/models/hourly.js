'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hourly extends Model {
    static associate(models) {
      Hourly.belongsTo(models.Daily, {
        foreignKey: 'dailyId',
        as: 'daily'
      });
    }
  }

  Hourly.init(
    {
      hourlyId: {
        allowNull: false,
        autoIncrement: true,
        field: 'hourly_id',
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      time: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      usage: {
        allowNull: false,
        type: DataTypes.INTEGER
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
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Hourly',
      tableName: 'hourly',
    }
  );

  return Hourly;
};
