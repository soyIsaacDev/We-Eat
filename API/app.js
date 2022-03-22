const { db } = require('./src/db')
var app = require('./index.js');
const cors = require('cors');

/* const force = true;
db.sync({ force }) */
app.use(cors());

const alter = true;
db.sync({ force:true })
    .then(function () {
        app.listen(4000, function () {
            console.log('Server is listening on port 4000!');
          
        });
    });
