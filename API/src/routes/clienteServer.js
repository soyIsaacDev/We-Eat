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

  const findByUsername = server.get(
    async (username, req,res) => {
      console.log("AHORA ACA" + username);      
      try {
        let {nombre} = req.query;
        const client= await Clientes.findOne({
          where:{usuario:"ewatt"}
        });
        console.log(client)
        res.json(client)
      } catch (error) {
        console.log(error)
      }
    } 
  )

  /* const findByUsername =  
    async (username) => {
    try {
      const client= await Clientes.findOne({
        where:{usuario:username}
      });
      console.log(client)
    } catch (error) {
      console.log(error)
    }
  } */
  

  server.get("/buscar", async (req, res) => {
    console.log("AQUI ANDO")
    findByUsername()
  }) 
    
  module.exports = server;
  module.exports = findByUsername;