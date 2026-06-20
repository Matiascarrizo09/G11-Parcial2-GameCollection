const express = require('express');
const router = express.Router();

const juegoController = require('../controllers/juego.controller');

router.get('/', juegoController.obtenerJuegos);
router.get('/:id', juegoController.obtenerJuegoPorId);
router.post('/', juegoController.crearJuego);
router.delete('/:id', juegoController.eliminarJuego);

module.exports = router;