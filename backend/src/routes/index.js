const express = require('express');
const router = express.Router();

const juegoRoutes = require('./juego.routes');
const usuarioRoutes = require('./usuario.routes');
const coleccionRoutes = require('./coleccion.routes');

router.use('/juegos', juegoRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/colecciones', coleccionRoutes);

module.exports = router;