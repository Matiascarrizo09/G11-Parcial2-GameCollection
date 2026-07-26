"use strict";
const fs = require("fs");
const path = require("path");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const routeJson = path.join(__dirname, "../data/usuarios.json");
    const rawData = fs.readFileSync("../data/usuarios.json", "utf-8");

    let data = JSON.parse(rawData);

    data = data.map((item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Usuarios", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
