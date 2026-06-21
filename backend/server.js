require('dotenv').config();

const app = require('./src/app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {

    await sequelize.authenticate();
    console.log('Base de datos conectada correctamente');

    await sequelize.sync({ alter: true });
    console.log('Tablas sincronizadas correctamente');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error('Error al iniciar:', error);
  }
}

startServer();