const express = require('express');
const { index, restaurantes, envios, repartidor, clientefinal, auth, 
  ClienteRestaurantero, authrestaurantero, pedidos, authrepartidor } = require('./src/routes');
const app = express();
const passport = require('passport');
var session = require('express-session');
var db = require('./src/db');
var path = require('path');

/* app.use(passport.initialize());
app.use(passport.session()); */
app.set('view engine', 'ejs');
//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'));
//mantener sesion autenticada
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  //store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));

app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

app.use('/', index);
app.use("/authcliente", auth ) // usamos autenticacion en todas las rutas
app.use("/authrestaurantero", authrestaurantero);
app.use("/authrepartidor", authrepartidor)

app.use("/restaurantes", restaurantes)
app.use("/envios", envios);
app.use("/repartidor", repartidor);
app.use("/clientefinal", clientefinal);
app.use("/clienteRestaurantero", ClienteRestaurantero );
app.use("/pedidos", pedidos);


app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});



passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.users.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch(err => {
        return done(err);
      })
  });
  

module.exports = app;
