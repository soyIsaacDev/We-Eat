const server = require("express").Router();

const { ClienteRestaurantero, Restaurantes, Corporativo } = require("../db");

server.post("/agregarclienterestaurantero", async (req, res) => { 
  try {
    const { nombre, usuario, contraseña, tipo_de_usuario, nombreCorp, nombreRest } = req.body;
    const client = await ClienteRestaurantero.findOrCreate({
      where: {
        nombre
      },
      defaults:{
          usuario,
          contraseña,
          tipo_de_usuario
      }
    });
    const corp = await Corporativo.findOne({
      where: {
        nombre: nombreCorp
      }
    });
    const rest = await Restaurantes.findOne({
      where: {
        nombre: nombreRest
      }
    });

    await corp.addClienteRestaurantero(client[0]);
    await client[0].setCorporativo(corp);
    await rest.addClienteRestaurantero(client[0]);
    await client[0].addRestaurantes(rest);

    res.json(client);
  } catch (error) {
    res.send(error);
  }
});

 server.get("/clienterestaurantero", async (req,res)=> {
    try{
      const client = await ClienteRestaurantero.findAll({
        
      });
      res.json(client);
    }
    catch(e){
      res.send(e);
    }
  });

  server.get("/clienterestaurantero/:id", async (req, res) => {
    try {
      let {id} = req.params;
      const client= await ClienteRestaurantero.findOne({
        where:{id}
      });
      res.json(client);
    } catch (error) {
      res.send(error);
    }
  })

  server.get("/clienterestaurantero/:nombre", async (req, res) => {
    try {
      let {nombre} = req.params;
      const client= await ClienteRestaurantero.findOne({
        where:{nombre}
      });
      res.json(client);
    } catch (error) {
      res.send(error);
    }
  }) 

  const findByUsername = server.get(
    async (username, req,res) => {
      console.log("AHORA ACA" + username);      
      try {
        const {nombre} = req.query;
        const client= await ClienteRestaurantero.findOne({
          where:{usuario:"ewatt"}
        });
        console.log(client)
        res.json(client)
      } catch (error) {
        console.log(error)
      }
    } 
  )

  server.get("/user", async (req,res) => {      
      try {
        const {usuario} = req.query;
        const client= await ClienteRestaurantero.findOne({
          where:{usuario}
        });
        console.log(client)
        res.json(client)
      } catch (error) {
        console.log(error)
      }
    } 
  )

  
  module.exports = server;
  module.exports = findByUsername;