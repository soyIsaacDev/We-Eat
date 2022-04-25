const server = require("express").Router();

const { Clientes } = require("../db");

server.post("/agregarclientes", async (req, res) => { 
  try {
    const { nombre, usuario, contraseña } = req.body;
    const client = await Clientes.findOrCreate({
      where: {
        nombre
      },
      defaults:{
          usuario,
          contraseña
      }
    });
    res.json(client);
  } catch (error) {
    res.send(error);
  }
});

 server.get("/clientes", async (req,res)=> {
    try{
      const client = await Clientes.findAll({
        
      });
      res.json(client);
    }
    catch(e){
      res.send(e);
    }
  });

  server.get("/cliente/:id", async (req, res) => {
    try {
      let {id} = req.params;
      const client= await Clientes.findOne({
        where:{id}
      });
      res.json(client);
    } catch (error) {
      res.send(error);
    }
  })

  server.get("/clientes/:nombre", async (req, res) => {
    try {
      let {nombre} = req.params;
      const client= await Clientes.findOne({
        where:{nombre}
      });
      res.json(client);
    } catch (error) {
      res.send(error);
    }
  }) 

  module.exports = server;