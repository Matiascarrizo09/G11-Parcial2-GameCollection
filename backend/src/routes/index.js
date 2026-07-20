const express = require('express');
const router = express.Router();

const juegoRoutes = require('./juego.routes');
const usuarioRoutes = require('./usuario.routes');
const coleccionRoutes = require('./coleccion.routes');
const usuarioJuegoRoutes = require("./usuarioJuego.routes");
const authRoutes = require("./auth.routes");

router.use('/juegos', juegoRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/colecciones', coleccionRoutes);
router.use("/usuariojuegos", usuarioJuegoRoutes);
router.use("/auth", authRoutes);

module.exports = router;