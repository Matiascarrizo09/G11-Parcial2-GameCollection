require("dotenv").config();

const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const sequelize = require("./src/config/database");

const Usuario = require("./models/usuario.model");
const Juego = require("./models/juego.model");
const Coleccion = require("./models/coleccion.model");

async function cargarDatos() {
  try {
    await sequelize.authenticate();
    console.log("Conectado a PostgreSQL.");

    // ---------- USUARIOS ----------
    const usuarios = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "usuarios.json"), "utf8"),
    );

    for (const usuario of usuarios) {
      const existe = await Usuario.findOne({
        where: { email: usuario.email },
      });

      if (!existe) {
        const passwordHash = await bcrypt.hash(usuario.contrasenia, 10);

        await Usuario.create({
          ...usuario,
          contrasenia: passwordHash,
        });
      }
    }

    console.log("Usuarios cargados.");

    // ---------- JUEGOS ----------
    const juegos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "juegos.json"), "utf8"),
    );

    await Juego.bulkCreate(juegos, {
      ignoreDuplicates: true,
    });

    console.log("Juegos cargados.");

    // ---------- COLECCIONES ----------
    const colecciones = JSON.parse(
      fs.readFileSync(path.join(__dirname, "data", "colecciones.json"), "utf8"),
    );

    await Coleccion.bulkCreate(colecciones, {
      ignoreDuplicates: true,
    });

    console.log("Colecciones cargadas.");

    console.log("Seed finalizado correctamente.");

    process.exit(0);
  } catch (error) {
    console.error("Error al cargar datos:");
    console.error(error);
    process.exit(1);
  }
}

cargarDatos();
