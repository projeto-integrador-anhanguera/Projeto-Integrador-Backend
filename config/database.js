const env = require('./env');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.envLocal.database, env.envLocal.username, env.envLocal.password, {
  host: env.envLocal.host,
  dialect: env.envLocal.dialect,
  operatorsAliases: false,
  native: true,
  logging: true,
  define: {
    freezeTableName: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.car = require('../app/models/CarModel')(sequelize, Sequelize);
db.user = require('../app/models/UserModel') (sequelize, Sequelize);

module.exports = db;