const { db } = require('./src/db')
var app = require('./index.js');
const cors = require('cors');
require("dotenv").config();

const port = process.env.PORT || 4000;

/* const force = true;
db.sync({ force }) */
app.use(cors());
//const port = 4000;
const alter = true;

db.sync({ force:true })
    .then(function () {
        app.listen(port, function () {
            console.log('Server is listening on port ' + port);
          
        });
    });
