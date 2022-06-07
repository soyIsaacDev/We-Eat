const server = require("express").Router();
const express = require("express");
const { Op } = require("sequelize");
const cors = require("cors");

const { ImgRest } = require("../db");
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");


server.use(cors());

//server.get("/imageupload", homeController.getHome);

//server.post("/upload", upload.single("file"), uploadController.uploadFiles);
server.get("/imagenes", async (req,res)=> {
  try{
    const imagenes = await ImgRest.findAll({
      attributes: ['name']
    });
    res.send(imagenes);
  }
  catch(e){
    res.send(e);
  }
});

server.use(express.static(__dirname + 'public'));
//server.use('/uploads', express.static('resources/uploads'));

module.exports = {
  restaurantes: require("./restaurantServer"),
  envios: require("./envioServer"),
  repartidor: require("./repartidorServer"),
  clientefinal: require("./clienteServer"),
  ClienteRestaurantero: require("./clienteRestaurantServer"),
  auth: require("./auth"),
  authrestaurantero: require("./authRestaurantero"),
  authrepartidor: require("./authRepartidor"),
  pedidos: require("./pedidoServer"),
  index: server,
};