const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('autosafe', 'postgres', 'postgres');

const Car = sequelize.define('Car', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrementIdentity: true
    },
    model: {
        type: DataTypes.STRING(15),
        allowNull = false
    },
    releaseYear: {
        type: DataTypes.STRING(4),
        allowNull = false
    },
    lincensePlate: {
        type: DataTypes.STRING(7),
        allowNull = false
    },
    rfid: {
        type: DataTypes.STRING(30),
        allowNull = false
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull = false
    }
});

return Car;
