'use strict';

const Sequelize = require('sequelize');
const dbConfig = require('../../config/db.config.js')

const db = {};

let sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

db.Daily = require('./daily.js')(sequelize, Sequelize.DataTypes)
db.Hourly = require('./hourly.js')(sequelize, Sequelize.DataTypes)

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

