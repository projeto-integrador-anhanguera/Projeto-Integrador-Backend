module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
    },
    releaseYear: {
      type: DataTypes.STRING,
    },
    licensePlate: {
      type: DataTypes.STRING,
    },
    RFID: {
      type: DataTypes.STRING,
    },
    robberyDate: {
      type: DataTypes.DATEONLY,
    },
    customerId: {
      type: DataTypes.INTEGER,
    },
  });
  return Car;
};
