const obtenerUsuarios = async (req, res) => {
  res.json({ mensaje: 'Obtener todos los usuarios' });
};

const obtenerUsuarioPorId = async (req, res) => {
  res.json({ mensaje: `Obtener usuario ${req.params.id}` });
};

const crearUsuario = async (req, res) => {
  res.json({ mensaje: 'Crear usuario' });
};

const eliminarUsuario = async (req, res) => {
  res.json({ mensaje: `Eliminar usuario ${req.params.id}` });
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  eliminarUsuario
};