const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mensaje: 'Listado de juegos' });
});

module.exports = router;