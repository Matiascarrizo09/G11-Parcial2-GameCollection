const obtenerColecciones = async (req, res) => {
  res.json({ mensaje: 'Obtener todas las colecciones' });
};

const obtenerColeccionPorId = async (req, res) => {
  res.json({ mensaje: `Obtener colección ${req.params.id}` });
};

const crearColeccion = async (req, res) => {
  res.json({ mensaje: 'Crear colección' });
};

const eliminarColeccion = async (req, res) => {
  res.json({ mensaje: `Eliminar colección ${req.params.id}` });
};

module.exports = {
  obtenerColecciones,
  obtenerColeccionPorId,
  crearColeccion,
  eliminarColeccion
};