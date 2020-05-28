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
db.Car = require("../models/CarModel")(sequelize, Sequelize);
db.User = require("../models/UserModel")(sequelize, Sequelize);
db.Rfid = require('../models/RfidModel')(sequelize, Sequelize);


//Relationships
db.Rfid.hasOne(db.Car);
db.Car.belongsTo(db.Rfid);

module.exports = db;
