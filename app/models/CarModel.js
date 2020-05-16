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
    status: {
      type: DataTypes.STRING,
    },
    licensePlate: {
      type: DataTypes.STRING,
    },
    robberyDate: {
      type: DataTypes.DATEONLY,
    },
    recoveryDate:{
      type: DataTypes.DATEONLY
    },
    ownerName: {
      type: DataTypes.INTEGER,
    },
    ownerCNH: {
      type: DataTypes.STRING
    },
  });

  return Car;
};
