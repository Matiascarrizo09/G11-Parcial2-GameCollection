const express = require('express');
const router = express.Router();

const coleccionController = require('../controllers/coleccion.controller');

router.get('/', coleccionController.obtenerColecciones);
router.get('/:id', coleccionController.obtenerColeccionPorId);
router.post('/', coleccionController.crearColeccion);
router.delete('/:id', coleccionController.eliminarColeccion);

module.exports = router;