const fs = require("fs");
const {  Platillo, ImgPlatillo, Menu } = require("../db");

const path = require('path')
const carpeta = path.join(__dirname, '../../resources/uploads')
console.log("DIRECTORIO" + carpeta)

const uploadPlatillo = async (req, res) => {
    try {
      const bodyObj = req.body.data;
      const parsedbodyObj = JSON.parse(bodyObj)
      const {nombreMenu, nombre, descripcion, precio } = parsedbodyObj;
      if (req.file == undefined) {
        return res.send(`Selecciona la imagen del platillo`);
      }
      const menu = await Menu.findOrCreate({
        where: {
          RestauranteId: 1
        },
        defaults: {
          nombre: nombreMenu
        }  
      });

      console.log("MENU ID " + menu[0].id)
      const platillo = await Platillo.findOrCreate({
        where: {
          nombre: nombre,
        },
        defaults: {
          descripcion, 
          precio,
          MenuId: menu[0].id
        }      
      });

      const imagenRest = await ImgPlatillo.create({
        type: req.file.mimetype,
        name: req.file.filename,
        data: fs.readFileSync(
          carpeta +"/"+ req.file.filename
        ),
        PlatilloId:platillo[0].id
        
      }).then((image) => {
        fs.writeFileSync(
          carpeta + image.name,
          image.data
        );
      });     
      
      //await imagenRest.setPlatillo(platillo[0]);
      //await menu.setRestaurante()
      console.log(imagenRest)
      
      res.json(`Se creo el platillo y su imagen ` + platillo);
      //return res.send(`File has been uploaded.`);
      
    } catch (error) {
      console.log(error);
      return res.send(`Error al intentar crear el platillo: ${error}`);
    }
  };

  module.exports = {
    uploadPlatillo,
  };