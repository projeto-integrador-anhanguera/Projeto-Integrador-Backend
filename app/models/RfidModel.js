module.exports = (sequelize, DataTypes) => {
    return sequelize.define("RFID", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING  // Rua M, Joinville, SC, às 13:55
        },
        state: {
            type: DataTypes.STRING
        }
    });
};