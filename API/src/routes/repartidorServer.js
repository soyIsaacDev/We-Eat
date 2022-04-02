const server = require("express").Router();
//const req = require("express/lib/request");
const {  Repartidor, UbicacionRepartidor } = require("../db");
const {Op} = require("sequelize");


server.post("/nuevoRepartidor", async (req, res) => { 
  try {
    const { nombre, usuario, contraseña, estatus } = req.body;
    
    const repartidor = await Repartidor.findOrCreate({
        where: {
          usuario
        },
        defaults: {
          nombre,
          contraseña, 
          estatus
        }      
    });
    res.json(repartidor);
  } catch (error) {
    res.send(error);
  }
});
/* Format to send from Thunder Client
{  "ubicacion": { "lat": 29.0843225, "lng": -111.0360456 }   }  */
server.post("/ubicacionRepartidor", async (req, res) => { 
  try {
    const { ubicacion } = req.body;

    const ubicacionRepartidor = await UbicacionRepartidor.create({
        /* where: {
          RepartidorId
        }, 
        defaults: {
          ubicacion
        }  */  
       ubicacion   
    });
    res.json(ubicacionRepartidor);

  } catch (error) {
    res.send(error);
  }
});

server.get("/repartidor", async (req, res) => {
  try {
    const repartidor = await Repartidor.findAll({
    });
    res.json(repartidor);
  } catch (error) {     
    res.send(error);
  }
});

server.get("/repartidoractivo", async (req, res) => {
  try {
    const repartidor = await Repartidor.findAll({
      where:{
        estatus: {
          [Op.eq]: "Activo"
        }
      }
    });
    res.json(repartidor);
  } catch (error) {     
    res.send(error);
  }
});

server.get("/ubicacionRepartidor", async (req, res) => {
  try {
    const repartidor = await UbicacionRepartidor.findAll({
    });
    res.json(repartidor);
  } catch (error) {     
    res.send(error);
  }
});

module.exports = server;