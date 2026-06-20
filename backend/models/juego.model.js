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
    type: DataTypes.DATE, // Fecha
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  horasJugadas: {
    type: DataTypes.DECIMAL(4, 1), // Número decimal: 4 dígitos y 1 decimal
    allowNull: false,
    defaultValue: 0.0, // Valor por defecto
    validate: {
      min: 0.0, // Validación para no permitir valores negativos
    },
  },
  ultimaSesion: {
    type: DataTypes.DATEONLY, // Fecha
    allowNull: true,
  },
  favorito: {
    type: DataTypes.BOOLEAN, // Booleano
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Juego;
