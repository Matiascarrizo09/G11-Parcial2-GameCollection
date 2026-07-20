const express = require('express');
const router = express.Router();

const coleccionController = require('../controllers/coleccion.controller');
const verificarToken = require("../middlewares/verificarToken");

router.get('/',verificarToken, coleccionController.obtenerColecciones);
router.get('/:id',verificarToken, coleccionController.obtenerColeccionPorId);
router.post('/', verificarToken, coleccionController.crearColeccion);
router.delete('/:id',verificarToken, coleccionController.eliminarColeccion);
router.put('/:id', verificarToken, coleccionController.actualizarColeccion);

module.exports = router;