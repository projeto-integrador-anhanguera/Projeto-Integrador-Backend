module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Car", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        model: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        licensePlate: {
            type: DataTypes.STRING,
        },
        robberyDate: {
            type: DataTypes.DATEONLY,
        },
        recoveryDate: {
            type: DataTypes.DATEONLY
        },
        ownerName: {
            type: DataTypes.STRING,
        },
        ownerCNH: {
            type: DataTypes.STRING
        },
    });
};
