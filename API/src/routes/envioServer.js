const server = require("express").Router();
const { Envios, Repartidor } = require("../db");


server.get("/envios", async (req, res) => {
  try {
    const envios = await Envios.findAll({
    });
    res.json(envios);
  } catch (error) {
    res.send(error);
  }
});

/*  TAREAS
1.- Pensar como seleccionar un Repartidor a la hora de crear un envio
2.- Pensar como se obtendra el tiempo promedio que toma a un restaurant entregar su envio. */

server.post("/nuevoEnvio", async (req, res) => { 
  try {
    const { tipo_de_Entrega } = req.body;

    const envios = await Envios.Create({
      tipo_de_Entrega: tipo_de_Entrega
    });
    res.json(menu);

  } catch (error) {
    res.send(error);
  }
});


module.exports = server;