const server = require("express").Router();
const { Envios, Repartidor, Pedidos } = require("../db");


/*  TAREAS
1.- Pensar como seleccionar un Repartidor a la hora de crear un envio
2.- Pensar como se obtendra el tiempo promedio que toma a un restaurant entregar su envio. */

server.get("/nuevoEnvio/:reparto/:pedidoId", async (req, res) => { 
  try {
    let {reparto, pedidoId} = req.params;
    const envio = await Envios.create({
      reparto
    });
    const pedido = await Pedidos.findOne({
      where: {
        id: pedidoId
      }
  });
    envio.setPedido(pedido);
    res.json(envio);
  } catch (error) {
    res.send(error);
  }
});

server.get("/envios", async (req, res) => {
  try {
    const envios = await Envios.findAll({
    });
    res.json(envios);
  } catch (error) {
    res.send(error);
  }
});

server.get("/envios/:reparto", async (req, res) => { 
  let {reparto} = req.params;
  try {
    const envio = await Envios.findAll({
      where: { reparto }
    });
    res.json(envio);
  } catch (error) {
    res.send(error);
  }
});


module.exports = server;