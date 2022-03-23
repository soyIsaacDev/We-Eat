const server = require("express").Router();
const express = require("express");
const { Op } = require("sequelize");
const cors = require("cors");


server.use(cors());



module.exports = {
  restaurantes: require("./restaurantServer"),
  envios: require("./envioServer"),
  repartidor: require("./repartidorServer"),
  index: server,
};