const Juego = require('../../models/juego.model');

const obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.findAll();
    res.status(200).json(juegos);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los juegos',
      error: error.message
    });
  }
};

const obtenerJuegoPorId = async (req, res) => {
  try {
    const juego = await Juego.findByPk(req.params.id);

    if (!juego) {
      return res.status(404).json({
        mensaje: 'Juego no encontrado'
      });
    }

    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el juego',
      error: error.message
    });
  }
};

const crearJuego = async (req, res) => {
  try {
    const juego = await Juego.create(req.body);

    res.status(201).json({
      mensaje: 'Juego creado correctamente',
      juego
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al crear el juego',
      error: error.message
    });
  }
};

const actualizarJuego = async (req, res) => {
  try {
    const juego = await Juego.findByPk(req.params.id);

    if (!juego) {
      return res.status(404).json({
        mensaje: 'Juego no encontrado'
      });
    }

    await juego.update(req.body);

    res.status(200).json({
      mensaje: 'Juego actualizado correctamente',
      juego
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar el juego',
      error: error.message
    });
  }
};

const eliminarJuego = async (req, res) => {
  try {
    const juego = await Juego.findByPk(req.params.id);

    if (!juego) {
      return res.status(404).json({
        mensaje: 'Juego no encontrado'
      });
    }

    await juego.destroy();

    res.status(200).json({
      mensaje: 'Juego eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar el juego',
      error: error.message
    });
  }
};

module.exports = {
  obtenerJuegos,
  obtenerJuegoPorId,
  crearJuego,
  actualizarJuego,
  eliminarJuego
};