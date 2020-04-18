const env = require('../../config/env');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(env.envLocal.database, env.envLocal.username, env.envLocal.password);

const Car = sequelize.define('Car', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrementIdentity: true
    },
    model: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    lincensePlate: {
        type: DataTypes.STRING(7),
        allowNull: false
    },
    rfid: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    robberyDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

return Car;
