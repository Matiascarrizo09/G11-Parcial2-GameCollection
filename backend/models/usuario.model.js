const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../src/config/database");

const Usuario = sequelize.define("Usuario", {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreUsuario: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
  },
  contrasenia: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  mensaje: {
    type: DataTypes.TEXT,
  },
  fechaRegistro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  horasTotalesJugadas: {
    type: DataTypes.DECIMAL(6, 1),
    allowNull: false,
    defaultValue: 0.0,
    validate: {
      min: 0.0,
    },
  },
});

module.exports = Usuario;
