const express = require('express');
const router = express.Router();

const juegoController = require('../controllers/juego.controller');
const verificarToken = require("../middlewares/verificarToken");

router.get('/',verificarToken, juegoController.obtenerJuegos);
router.get('/:id', verificarToken, juegoController.obtenerJuegoPorId);
router.post('/', verificarToken, juegoController.crearJuego);
router.delete('/:id', verificarToken, juegoController.eliminarJuego);
router.put('/:id', verificarToken, juegoController.actualizarJuego);

module.exports = router;