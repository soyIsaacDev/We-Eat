const server = require("express").Router();
const fs = require("fs");

const { Restaurantes, Corporativo, ImgRest } = require("../db");
const path = require('path')
const carpeta = path.join(__dirname, '../../resources/uploads')
console.log("DIRECTORIO" + carpeta)
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");

server.post("/agregarImgRest", upload.single("file"), uploadController.uploadFiles);

server.get("/restaurantes", async (req, res) => {
  try {
    const Restaurants= await Restaurantes.findAll({
    });
    res.json(Restaurants);
  } catch (error) {
    res.send(error);
  }
});

server.post("/agregarRestaurantes", async (req, res) => { 
  try {
    const { nombreCorp, direccionCorp, nombre, direccion, area_de_reparto, actividad, estatus } = req.body;
    /* for(var pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
    } */
    const corp = await Corporativo.findOrCreate({
      where: {
        nombre: nombreCorp
      },
      defaults:{
        direccion: direccionCorp
      }
    });
    const restaurante = await Restaurantes.findOrCreate({
      where: {
        nombre: nombre
      },
      defaults: {
        direccion,
        area_de_reparto,
        actividad,
        estatus
      }      
    });
    await corp[0].addRestaurantes(restaurante[0]);
    res.json(restaurante);

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

module.exports = server;