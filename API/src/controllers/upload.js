// Image Uoloading based on https://www.bezkoder.com/node-js-upload-image-mysql/

const fs = require("fs");

/* const Image = require("../models/Image"); */
const {  Restaurantes, Corporativo, ImgRest } = require("../db");

const path = require('path')
const carpeta = path.join(__dirname, '../../resources/uploads')
console.log("DIRECTORIO" + carpeta)

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    
    const imagenRest = await ImgRest.create({
      type: req.file.mimetype,
      name: req.file.filename
      /* name: req.file.originalname */,
      data: fs.readFileSync(
        carpeta +"/"+ req.file.filename
      ),
      
    }).then((image) => {
      fs.writeFileSync(
        carpeta + image.name,
        image.data
      );
    });

    /* const { nombreCorp, direccionCorp, nombre, direccion, area_de_reparto, actividad, estatus } = req.body;

    const corp = await Corporativo.findOrCreate({
      where: {
        nombre: nombreCorp
      },
      defaults:{
        direccion: direccionCorp
      }
    });
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
    
    await corp[0].addRestaurantes(restaurante[0]);
    res.json(`Se creo el restaurante y su imagen`,restaurante ); */
    return res.send(`File has been uploaded.`);
    
  } catch (error) {
    console.log(error);
    return res.send(`Error al intentar crear el restaurante: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
