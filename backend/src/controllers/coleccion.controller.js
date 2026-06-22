const Coleccion = require('../../models/coleccion.model');

const obtenerColecciones = async (req, res) => {
  try {
    const colecciones = await Coleccion.findAll();

    res.status(200).json(colecciones);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener las colecciones',
      error: error.message
    });
  }
};

const obtenerColeccionPorId = async (req, res) => {
  try {
    const coleccion = await Coleccion.findByPk(req.params.id);

    if (!coleccion) {
      return res.status(404).json({
        mensaje: 'Colección no encontrada'
      });
    }

    res.status(200).json(coleccion);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener la colección',
      error: error.message
    });
  }
};

const crearColeccion = async (req, res) => {
  try {
    const coleccion = await Coleccion.create(req.body);

    res.status(201).json({
      mensaje: 'Colección creada correctamente',
      coleccion
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al crear la colección',
      error: error.message
    });
  }
};


const actualizarColeccion = async (req, res) => {
  try {
    const coleccion = await Coleccion.findByPk(req.params.id);

    if (!coleccion) {
      return res.status(404).json({
        mensaje: 'Colección no encontrada'
      });
    }

    await coleccion.update(req.body);

    res.status(200).json({
      mensaje: 'Colección actualizada correctamente',
      coleccion
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar la colección',
      error: error.message
    });
  }
};

const eliminarColeccion = async (req, res) => {
  try {
    const coleccion = await Coleccion.findByPk(req.params.id);

    if (!coleccion) {
      return res.status(404).json({
        mensaje: 'Colección no encontrada'
      });
    }

    await coleccion.destroy();

    res.status(200).json({
      mensaje: 'Colección eliminada correctamente'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar la colección',
      error: error.message
    });
  }
};

module.exports = {
  obtenerColecciones,
  obtenerColeccionPorId,
  crearColeccion,
  actualizarColeccion,
  eliminarColeccion
};