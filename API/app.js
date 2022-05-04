const { db } = require('./src/db')
var app = require('./index.js');
const cors = require('cors');

/* const force = true;
db.sync({ force }) */
app.use(cors());
const PORT = 4000;
const alter = true;

db.sync({ force:true })
    .then(function () {
        app.listen(PORT, function () {
            console.log('Server is listening on port ' + PORT);
          
        });
    });
