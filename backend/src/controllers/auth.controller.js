const jwt = require("jsonwebtoken");
const Usuario = require("../../models/usuario.model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, contrasenia } = req.body;

    // Buscar usuario
    const usuario = await Usuario.findOne({
      where: { email },
    });


    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    // Comparar contraseña
    const passwordCorrecta = await bcrypt.compare(
      contrasenia,
      usuario.contrasenia
    );

    if (!passwordCorrecta) {
      return res.status(401).json({
        mensaje: "Contraseña incorrecta",
      });
    }

const token = jwt.sign(
  {
    idUsuario: usuario.idUsuario,
    email: usuario.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "2h",
  }
);

console.log("TOKEN:", token);

res.status(200).json({
  mensaje: "Login correcto",
  token,
  usuario: {
    idUsuario: usuario.idUsuario,
    nombreUsuario: usuario.nombreUsuario,
    email: usuario.email,
  },
});

  } catch (error) {
    res.status(500).json({
      mensaje: "Error al iniciar sesión",
      error: error.message,
    });
  }
};

module.exports = {
  login,
};