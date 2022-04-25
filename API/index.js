const express = require('express');
const { index, restaurantes, envios, repartidor, clientes } = require('./src/routes');
const app = express();
const passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./src/db');

/* app.use(passport.initialize());
app.use(passport.session()); */

app.set('view engine', 'html');

app.use(express.static('./public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));

app.use('/', index);
app.use("/restaurantes", restaurantes)
app.use("/envios", envios);
app.use("/repartidor", repartidor);
app.use("/clientes", clientes);

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

passport.use(new Strategy(
    function(username, password, done) {
      db.users.findByUsername(username)
        .then((user) => {
          if(!user) {
            return done(null, false);
          }
          if(user.password != password) {
            return done(null, false);
          }
          return done(null, user);
        })
      .catch(err => {
        return done(err);
      })
    }));

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
