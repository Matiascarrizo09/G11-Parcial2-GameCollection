const { DataTypes } = require("sequelize");
const sequelize = require("../src/config/database");

const UsuarioJuego = sequelize.define("UsuarioJuego", {
  idUsuarioJuego: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  estado: {
    type: DataTypes.ENUM(
      "Pendiente",
      "Jugando",
      "Completado",
      "Abandonado"
    ),
    allowNull: false,
    defaultValue: "Pendiente",
  },

  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 5,
    },
  },

  horasJugadas: {
    type: DataTypes.DECIMAL(6,1),
    allowNull: false,
    defaultValue: 0,
  },

  ultimaSesion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
},
  {
  indexes: [
  {
    unique: true,
    fields: ["idUsuario", "idJuego"],
   },
 ],
}
);

module.exports = UsuarioJuego;