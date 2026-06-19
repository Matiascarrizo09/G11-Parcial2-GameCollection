const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../src/config/database");

const Coleccion = sequelize.define("Coleccion", {
  idColeccion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreColeccion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  cantidadJuegos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    min: 0,
  },
});

module.exports = Coleccion;
