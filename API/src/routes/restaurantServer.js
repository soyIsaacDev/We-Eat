const server = require("express").Router();
const fs = require("fs");
const express = require("express");

const { Restaurantes, Corporativo, ImgRest, Platillo, Menu, ImgPlatillo} = require("../db");
const path = require('path')
const carpeta = path.join(__dirname, '../../resources/uploads')
console.log("DIRECTORIO" + carpeta)
const uploadController = require("../controllers/upload");
const uploadImgPlatilloController = require("../controllers/uploadPlatillo");
const upload = require("../middleware/upload");

server.post("/agregarRestaurante", upload.single("file"), uploadController.uploadFiles);
server.post("/agregarPlatillo", upload.single("file"), uploadImgPlatilloController.uploadPlatillo);

server.post("/agregarmenu", async (req, res) => { 
  try {
    const {nombre } = req.body;
    const menu = await Menu.findOrCreate({
      where: {
        nombre
      }
    });
    res.json(menu);
  } catch (error) {
    res.send(error);
  }
});

server.post("/agregarcorp", async (req, res) => { 
  try {
    const {nombreCorp, direccionCorp } = req.body;

    const Corp = await Corporativo.findOrCreate({
      where: {
        nombre: nombreCorp
      },
      defaults:{
        direccion: direccionCorp
      }
    });   
    res.json(Corp);
  } catch (error) {
    res.send(error);
  }
});

server.get("/restaurantes", async (req, res) => {
  try {
    const Restaurants= await Restaurantes.findAll({       
      include: {
        model: ImgRest,
        attributes: ['name','RestauranteId'],
      },
      
    });
    res.json(Restaurants);
  } catch (error) {
    res.send(error);
  }
});

server.get("/corporativo", async (req,res)=> {
  try{
    const corp = await Corporativo.findAll({
      
    });
    res.json(corp);
  }
  catch(e){
    res.send(e);
  }
});

server.get("/platillos/:restaurantId", async (req, res) => {
  try {
    const {restaurantId} = req.params;
    const platillo = await Platillo.findAll({
      where:{RestauranteId: restaurantId},
      include: {
        model: ImgPlatillo,
        attributes: ['name']
      }
    });
    res.json(platillo);
  } catch (error) {
    res.send(error);
  }
});

server.get("/menu", async (req, res) => {
  try {
    const menu = await Menu.findAll();
    res.json(menu);
  } catch (error) {
    res.send(error);
  }
});

server.get("/imagenes", async (req,res)=> {
  try{
    const imagenes = await ImgRest.findAll({
      attributes: ['name','RestauranteId']
    });
    res.send(imagenes);
  }
  catch(e){
    res.send(e);
  }
});








server.get("/:route", async (req, res) => {
  try {
    let {route} = req.params;
    const restaurantDetails= await Restaurantes.findAll({
      include: {
        model: ImgRest,
        attributes: ['name','RestauranteId'],
      },
      
    });
    res.json(Restaurants);
  } catch (error) {
    res.send(error);
  }
});

server.get("/restaurantes/:id", async (req, res) => {
  try {
    let {id} = req.params;
    const Restaurants= await Restaurantes.findOne({
      where:{id},
      include: {
        model: ImgRest,
        attributes: ['name','RestauranteId'],
      },
      
    });
    res.json(Restaurants);
  } catch (error) {
    res.send(error);
  }
});








// Para ver las imagenes
server.use(express.static(__dirname + 'public'));
server.use('/uploads', express.static('resources/uploads'));
  //para ver la imagen -> http://localhost:4000/uploads/nombre de la imagen

module.exports = server;