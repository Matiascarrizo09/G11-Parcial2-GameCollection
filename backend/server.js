require('dotenv').config();

const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    console.log("1");

    await sequelize.authenticate();

    console.log("2");

    console.log('Base de datos conectada correctamente');

    console.log("3");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

    console.log("4");

  } catch (error) {
    console.error('Error al iniciar:', error);
  }
}

startServer();