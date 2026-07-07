const UsuarioJuego = require("../../models/usuarioJuego.model");
const Usuario = require("../../models/usuario.model");
const Juego = require("../../models/juego.model");


// Obtener todos
const obtenerUsuarioJuegos = async (req, res) => {
  try {
    const usuarioJuegos = await UsuarioJuego.findAll({
  include: [
    {
      model: Usuario,
      attributes: ["idUsuario", "nombreUsuario", "email"],
    },
    {
      model: Juego,
      attributes: ["idJuego", "nombreJuego", "genero", "desarrolladora"],
    },
  ],
});

    res.status(200).json(usuarioJuegos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los registros",
      error: error.message,
    });
  }
};

// Obtener por ID
const obtenerUsuarioJuegoPorId = async (req, res) => {
  try {
    const usuarioJuego = await UsuarioJuego.findByPk(req.params.id, {
  include: [
    {
      model: Usuario,
      attributes: ["idUsuario", "nombreUsuario", "email"],
    },
    {
      model: Juego,
      attributes: ["idJuego", "nombreJuego", "genero", "desarrolladora"],
    },
  ],
});

    if (!usuarioJuego) {
      return res.status(404).json({
        mensaje: "Registro no encontrado",
      });
    }

    res.status(200).json(usuarioJuego);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el registro",
      error: error.message,
    });
  }
};

// Crear
const crearUsuarioJuego = async (req, res) => {
  try {
    const usuarioJuego = await UsuarioJuego.create(req.body);

    res.status(201).json({
      mensaje: "Registro creado correctamente",
      usuarioJuego,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el registro",
      error: error.message,
    });
  }
};

// Actualizar
const actualizarUsuarioJuego = async (req, res) => {
  try {
    const usuarioJuego = await UsuarioJuego.findByPk(req.params.id);

    if (!usuarioJuego) {
      return res.status(404).json({
        mensaje: "Registro no encontrado",
      });
    }

    await usuarioJuego.update(req.body);

    res.status(200).json({
      mensaje: "Registro actualizado correctamente",
      usuarioJuego,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar",
      error: error.message,
    });
  }
};

// Eliminar
const eliminarUsuarioJuego = async (req, res) => {
  try {
    const usuarioJuego = await UsuarioJuego.findByPk(req.params.id);

    if (!usuarioJuego) {
      return res.status(404).json({
        mensaje: "Registro no encontrado",
      });
    }

    await usuarioJuego.destroy();

    res.status(200).json({
      mensaje: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar",
      error: error.message,
    });
  }
};

module.exports = {
  obtenerUsuarioJuegos,
  obtenerUsuarioJuegoPorId,
  crearUsuarioJuego,
  actualizarUsuarioJuego,
  eliminarUsuarioJuego,
};