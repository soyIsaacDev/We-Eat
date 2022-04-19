// Image Uploading based on https://www.bezkoder.com/node-js-upload-image-mysql/

const fs = require("fs");

/* const Image = require("../models/Image"); */
const {  Restaurantes, Corporativo, ImgRest } = require("../db");

const path = require('path')
const carpeta = path.join(__dirname, '../../resources/uploads')
console.log("DIRECTORIO" + carpeta)

const uploadFiles = async (req, res) => {
  
  try {
    
    const bodyObj = req.body.data;
    const parsedbodyObj = JSON.parse(bodyObj)
    const { nombreCorp, direccionCorp, nombre, direccion, area_de_reparto, actividad, estatus } = parsedbodyObj;
   
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    const restaurante = await Restaurantes.findOrCreate({
      where: {
        nombre: nombre
      },
      defaults: {
        direccion,
        area_de_reparto,
        actividad,
        estatus
      }      
    });
    console.log("Restaurante " + JSON.stringify(restaurante));
    console.log("Restaurante " + restaurante[0].id)
    const imagenRest = await ImgRest.create({
      type: req.file.mimetype,
      name: req.file.filename,
      data: fs.readFileSync(
        carpeta +"/"+ req.file.filename
      ),
      RestauranteId:restaurante[0].id
      
    }).then((image) => {
      fs.writeFileSync(
        carpeta + image.name,
        image.data
      );
    });

    const corp = await Corporativo.findOrCreate({
      where: {
        nombre: nombreCorp
      },
      defaults:{
        direccion: direccionCorp
      }
    });
     
    
    await corp[0].addRestaurantes(restaurante[0]);
    //await imagenRest.setRestaurantes(restaurante[0]);
    console.log(imagenRest)
    
    res.json(`Se creo el restaurante y su imagen`);
    //return res.send(`File has been uploaded.`);
    
  } catch (error) {
    console.log(error);
    return res.send(`Error al intentar crear la imagen: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
