const Juegos = require("./juego.model.js");
const Usuarios = require("./usuario.model.js");
const Colecciones = require("./coleccion.model.js");

// Usuarios 1------N Juegos
Usuarios.hasMany(Juegos, {
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
});

// Juegos N--------1 Usuarios
Juegos.belongsTo(Usuarios, {
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
});

// Usuarios 1------N Colecciones
Usuarios.hasMany(Colecciones, {
  foreignKey: "idUsuario",
});

// Colecciones N---1 Usuarios
Colecciones.belongsTo(Usuarios, {
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
});

// Colecciones N---M juegos
Colecciones.belongsToMany(Juegos, {
  through: "JuegoColeccion",
});

// Juegos N--------M Colecciones
Juegos.belongsToMany(Colecciones, {
  through: "JuegoColeccion",
});


module.exports = {
  Juegos,
  Usuarios,
  Colecciones,
};
