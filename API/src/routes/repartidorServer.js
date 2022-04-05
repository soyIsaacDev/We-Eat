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
/* server.post("/ubicacionRepartidor", async (req, res) => { 
  try {
    const { idRepartidor, ubicacion } = req.body;
    const ubicacionRepartidor = await UbicacionRepartidor.create({
       ubicacion, 
       RepartidorId: idRepartidor 
    });  
    res.send(ubicacionRepartidor);
  } catch (error) {
    res.send(error);
  }
}); */

server.get("/buscarRepartidor", async (req, res) => {
  const { name } = req.query;
  try {
    const repartidor = await Repartidor.findOne({
      where: {
        nombre: name,
      },
    });
    res.json(repartidor ? repartidor : "No existe ese repartidor");
  } catch (error) {
    res.send(error);
  }
});

server.post("/ubicacionRepartidor", async (req, res) => { 
  try {
    const { name, ubicacion } = req.body;
    const repartidor = await Repartidor.findOne({
      where: {
        nombre: name,
      },
    });
    const idRepartidor = repartidor
    const ubiRepartidor = await UbicacionRepartidor.findOne({
      where:{
        ubicacion
      }
    })
    if(!ubiRepartidor){
      const ubicacionRepartidor = await UbicacionRepartidor.create({
        ubicacion, 
        RepartidorId: idRepartidor.id 
     });  
     res.send(ubicacionRepartidor);
    }
    else{
      const ubicacionRepartidor = await UbicacionRepartidor.update(
        {ubicacion},
        {
          where:{
            RepartidorId: idRepartidor.id 
          }
      });  
      res.send(ubicacionRepartidor);
    }
    
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