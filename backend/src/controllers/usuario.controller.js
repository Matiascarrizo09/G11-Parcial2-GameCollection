const Usuario = require("../../models/usuario.model");
const bcrypt = require("bcrypt");

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      attributes: { exclude: ["contrasenia"] }, // Excluye la contraseña del resultado para mayor seguridad (aunque se muestre la contraseña hasheada)
    });

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los usuarios",
      error: error.message,
    });
  }
};

const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      attributes: { exclude: ["contrasenia"] }, // Excluye la contraseña del resultado para mayor seguridad (aunque se muestre la contraseña hasheada)
    });

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el usuario",
      error: error.message,
    });
  }
};

const crearUsuario = async (req, res) => {
  try {
    // Implementación de bcrypt al crear usuario
    const datosUsuario = {
      ...req.body,
      contrasenia: await bcrypt.hash(req.body.contrasenia, 10), // Se toma la contraseña ingresada y bcrypt la hashea con un cost factor de 10.
    };

    const usuario = await Usuario.create(datosUsuario); // Se evita modificar directamente 'req.body'

    res.status(201).json({
      mensaje: "Usuario creado correctamente con el id: " + usuario.idUsuario,
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
        mensaje: "Usuario no encontrado",
      });
    }

    const datosActualizados = {
      ...req.body,
    };

    // Se hashea la nueva contraseña en caso de incluirse entre los datos actualizados
    if (datosActualizados.contrasenia) {
      datosActualizados.contrasenia = await bcrypt.hash(
        datosActualizados.contrasenia,
        10,
      );
    }

    await usuario.update(datosActualizados);

    res.status(200).json({
      mensaje: "Usuario actualizado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar el usuario",
      error: error.message,
    });
  }
};

const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    await usuario.destroy();

    res.status(200).json({
      mensaje: "Usuario eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar el usuario",
      error: error.message,
    });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
