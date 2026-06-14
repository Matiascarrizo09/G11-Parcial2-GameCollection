require('dotenv').config();

const sequelize = require('./src/config/database');

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente');
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
}

startServer();