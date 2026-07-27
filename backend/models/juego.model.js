const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../src/config/database");

const Juego = sequelize.define("Juego", {
  idJuego: {
    type: DataTypes.INTEGER, // número entero
    primaryKey: true, // establecer como primary key
    autoIncrement: true, // aumenta automaticamente, evitando ids iguales
  },
  nombreJuego: {
    type: DataTypes.STRING(50), // Equivalente a string VARCHAR(50)
    allowNull: false,
  },
  desarrolladora: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fechaLanzamiento: {
    type: DataTypes.DATEONLY, // Fecha sin hora
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  favorito: {
    type: DataTypes.BOOLEAN, // Booleano
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Juego;
