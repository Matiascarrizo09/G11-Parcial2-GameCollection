const Usuario = require('../../models/usuario.model');
const bcrypt = require("bcrypt");

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los usuarios',
      error: error.message
    });
  }
};

const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado'
      });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el usuario',
      error: error.message
    });
  }
};


const crearUsuario = async (req, res) => {
  try {

    const passwordHash = await bcrypt.hash(req.body.contrasenia, 10);

    const usuario = await Usuario.create({
      ...req.body,
      contrasenia: passwordHash,
    });

    const { contrasenia, ...usuarioSinPassword } = usuario.toJSON();

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: usuarioSinPassword,
});


  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el usuario",
      error: error.message,
    });
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado'
      });
    }

    await usuario.update(req.body);

    res.status(200).json({
      mensaje: 'Usuario actualizado correctamente',
      usuario
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar el usuario',
      error: error.message
    });
  }
};

const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: 'Usuario no encontrado'
      });
    }

    await usuario.destroy();

    res.status(200).json({
      mensaje: 'Usuario eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar el usuario',
      error: error.message
    });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};