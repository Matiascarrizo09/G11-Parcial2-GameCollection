const express = require('express');
const cors = require('cors');


const usuarioRoutes = require('./routes/usuario.routes');
const juegoRoutes = require('./routes/juego.routes');
const coleccionRoutes = require('./routes/coleccion.routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/juegos', juegoRoutes);
app.use('/api/colecciones', coleccionRoutes);


app.get('/', (req, res) => {
  res.json({
    mensaje: 'Game Collection API funcionando'
  });
});

module.exports = app;