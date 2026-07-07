const Juegos = require("./juego.model.js");
const Usuarios = require("./usuario.model.js");
const Colecciones = require("./coleccion.model.js");
const UsuarioJuego = require("./usuarioJuego.model");



// Usuarios 1------N Colecciones
Usuarios.hasMany(Colecciones, {
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
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

Usuarios.hasMany(UsuarioJuego, {
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
});

UsuarioJuego.belongsTo(Usuarios, {
  foreignKey: {
    name: "idUsuario",
    allowNull: false,
  },
});

Juegos.hasMany(UsuarioJuego, {
  foreignKey: {
    name: "idJuego",
    allowNull: false,
  },
});

UsuarioJuego.belongsTo(Juegos, {
  foreignKey: {
    name: "idJuego",
    allowNull: false,
  },
});


module.exports = {
  Juegos,
  Usuarios,
  Colecciones,
  UsuarioJuego,
};
