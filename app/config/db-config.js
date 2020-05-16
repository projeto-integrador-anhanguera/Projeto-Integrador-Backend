const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.cars = require("../models/CarModel")(sequelize, Sequelize);
db.users = require("../models/UserModel")(sequelize, Sequelize);
db.rfid = require('../models/RfidModel')(sequelize, Sequelize);


//Relationships
db.cars.hasOne(db.rfid);
db.rfid.belongsTo(db.cars);

module.exports = db;
