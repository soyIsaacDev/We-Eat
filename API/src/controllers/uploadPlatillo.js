const fs = require("fs");
const {  Platillo, ImgPlatillo, Restaurantes, Menu, ClienteRestaurantero } = require("../db");

const path = require('path');
const carpeta = path.join(__dirname, '../../resources/uploads')
console.log("DIRECTORIO" + carpeta)

const uploadPlatillo = async (req, res) => {
    try {
      const bodyObj = req.body.data;
      const parsedbodyObj = JSON.parse(bodyObj)
      const {nombreMenu, nombrePlatillo, descripcion, precio, nombreRest} = parsedbodyObj;
      if (req.file == undefined) {
        return res.send(`Selecciona la imagen del platillo`);
      }
      const restaurant = await Restaurantes.findOne({
        where:{nombre: nombreRest}
      })
      const platillo = await Platillo.findOrCreate({
        where: {
          nombre: nombrePlatillo,
        },
        defaults: {
          descripcion, 
          precio,
          //MenuId: menu[0].id
          menu: nombreMenu,
          RestauranteId: restaurant.id
        }      
      });

      //restaurant.addPlatillo(platillo);
      

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