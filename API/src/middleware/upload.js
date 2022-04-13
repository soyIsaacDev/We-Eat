const multer = require("multer");
const path = require('path')
const carpeta = path.join(__dirname, '../../resources/uploads')

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

console.log("DIRECTORIO  "+ carpeta)
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,  carpeta);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-soyIsaacDev-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
