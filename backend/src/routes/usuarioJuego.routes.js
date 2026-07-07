const express = require("express");
const router = express.Router();

const usuarioJuegoController = require("../controllers/usuarioJuego.controller");

router.get("/", usuarioJuegoController.obtenerUsuarioJuegos);

router.get("/:id", usuarioJuegoController.obtenerUsuarioJuegoPorId);

router.post("/", usuarioJuegoController.crearUsuarioJuego);

router.put("/:id", usuarioJuegoController.actualizarUsuarioJuego);

router.delete("/:id", usuarioJuegoController.eliminarUsuarioJuego);

module.exports = router;