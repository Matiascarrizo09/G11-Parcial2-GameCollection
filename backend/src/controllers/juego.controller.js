const obtenerJuegos = async (req, res) => {
  res.json({ mensaje: 'Obtener todos los juegos' });
};

const obtenerJuegoPorId = async (req, res) => {
  res.json({ mensaje: `Obtener juego ${req.params.id}` });
};

const crearJuego = async (req, res) => {
  res.json({ mensaje: 'Crear juego' });
};

const eliminarJuego = async (req, res) => {
  res.json({ mensaje: `Eliminar juego ${req.params.id}` });
};

const actualizarJuego = async (req, res) => {
  res.json({ mensaje: `Actualizar juego ${req.params.id}`});
};

module.exports = {
  obtenerJuegos,
  obtenerJuegoPorId,
  crearJuego,
  eliminarJuego,
  actualizarJuego
};