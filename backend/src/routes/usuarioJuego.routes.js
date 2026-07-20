const express = require("express");
const router = express.Router();

const usuarioJuegoController = require("../controllers/usuarioJuego.controller");
const verificarToken = require("../middlewares/verificarToken");

router.get("/", verificarToken, usuarioJuegoController.obtenerUsuarioJuegos);

router.get("/:id", verificarToken, usuarioJuegoController.obtenerUsuarioJuegoPorId);

router.post("/", verificarToken, usuarioJuegoController.crearUsuarioJuego);

router.put("/:id", verificarToken, usuarioJuegoController.actualizarUsuarioJuego);

router.delete("/:id", verificarToken, usuarioJuegoController.eliminarUsuarioJuego);

module.exports = router;