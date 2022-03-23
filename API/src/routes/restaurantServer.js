const server = require("express").Router();
const { Restaurantes, Corporativo } = require("../db");


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

module.exports = server;