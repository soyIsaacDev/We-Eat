const server = require("express").Router();

const { Clientefinal } = require("../db");

server.post("/agregarclientes", async (req, res) => { 
  try {
    const { nombre, usuario, contraseña } = req.body;
    const client = await Clientefinal.create({
      /* where: {
        nombre
      }, */
      //defaults:{
        nombre,
          usuario,
          contraseña
      //}
    });
    console.log(client)
    res.json(client);
  } catch (error) {
    res.send(error);
  }
});

 server.get("/clientes", async (req,res)=> {
    try{
      const client = await Clientefinal.findAll({
        
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
      const client= await Clientefinal.findOne({
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
      const client= await Clientefinal.findOne({
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
        const client= await Clientefinal.findOne({
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
        const client= await Clientefinal.findOne({
          where:{usuario}
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
      const client= await Clientefinal.findOne({
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