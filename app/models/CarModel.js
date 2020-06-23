module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Car', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        model: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        },
        licensePlate: {
            type: DataTypes.STRING
        },
        robberyDate: {
            type: DataTypes.DATEONLY
        },
        robberyLocation: {
            type: DataTypes.STRING
        },
        recoveryDate: {
            type: DataTypes.DATEONLY
        },
        ownerName: {
            type: DataTypes.STRING
        },
        ownerCNH: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING(2),
        },
        RFID: {
            type: DataTypes.STRING
        }
    },
        {
            freezeTableName: true,
            tableName: 'Cars'
        });
};
