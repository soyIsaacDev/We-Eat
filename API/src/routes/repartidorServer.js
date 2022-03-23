const server = require("express").Router();
const req = require("express/lib/request");
const {  Repartidor } = require("../db");
const {Op} = require("sequelize");


server.post("/nuevoRepartidor", async (req, res) => { 
  try {
    const { nombre, usuario, contraseña, estatus } = req.body;

    const repartidor = await Repartidor.findOrCreate({
        where: {
          nombre
        },
        defaults: {
          usuario,
          contraseña, 
          estatus
        }      
    });
    res.json(repartidor);

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


module.exports = server;