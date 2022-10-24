'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Daily extends Model {
    static associate(models) {
      Daily.hasMany(models.Hourly, {
       foreignKey: 'dailyId',
      });
    }
  }

  Daily.init(
    {
      dailyId: 
      {
        allowNull: false,
        autoIncrement: true,
        field: 'daily_id',
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.STRING,
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
      }
    },
    {
      sequelize,
      modelName: 'Daily',
      tableName: 'daily',
    }
  );

  return Daily;
};
