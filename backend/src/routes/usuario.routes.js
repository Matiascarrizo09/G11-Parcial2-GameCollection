const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller');
const verificarToken = require("../middlewares/verificarToken");

router.get('/', verificarToken, usuarioController.obtenerUsuarios);
router.get('/:id', verificarToken, usuarioController.obtenerUsuarioPorId);
router.post('/',verificarToken, usuarioController.crearUsuario);
router.delete('/:id',verificarToken, usuarioController.eliminarUsuario);
router.put('/:id', verificarToken, usuarioController.actualizarUsuario);

module.exports = router;