var express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
var passport = require('passport');
//var Strategy = require('passport-local').Strategy;
var LocalStrategy = require('passport-local');
var app = express.Router();

const { Repartidor, SesionRepartidor} = require("../db");

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, usuario: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

const SesionAuth = async function(auth, id) { 
  try {
    if(auth=== "LoggedIn"){
      console.log("Paso por SesionAuth LoggedIn Linea 26");
      const sesion = await SesionRepartidor.findOrCreate({
        where:{RepartidorId: id},
        defaults:{
          autenticated: auth
        }
    });
    console.log("SesionAuth Login-->>"+ sesion)
    return(sesion);  //VER COMO REGRESO LA SESION
    };
    
    if(auth=== "LoggedOut"){
      const sesion = await SesionRepartidor.findOne({
        where:{RepartidorId: id}
      });
      sesion.autenticated = auth;
      await sesion.save();
      console.log("SesionAuth Logout-->>"+ sesion)
      return(sesion);
    };
    
  } catch (error) {
    return(error);
  }
};

app.post('/loginrest/password',
  passport.authenticate('local', { 
    failureRedirect: '/login' 
  }),
  function(req, res) {
  }
);

app.get('/sesionrepartidor', async function(req, res) {
  try {
    const { username, password } = req.body;
    const user = await Repartidor.findOne({
      where:{ usuario: username }
    });
    console.log("Cliente Repartidor sesion L-66 " + user.id + user.contraseña)
    if(password != user.contraseña){
      console.log("Contraseña Incorrecta SesionRepartidor L-68")
      res.send("Contraseña Incorrecta"); 
      return}
    const sesion = await SesionRepartidor.findOne({
      where:{RepartidorId: user.id}
    })
    console.log("Get ./SesionRepartidor Linea 74" + sesion);
    res.json(sesion)
  } catch (e) {
    res.json(e);
  }
});  

app.post('/SesionRepartidor', async function(req, res) {
  try {
    const { username, password } = req.body;
    console.log("Linea 84 "+ username);
    const user = await Repartidor.findOne({
      where:{ usuario: username }
    });
    console.log("Cliente Restaurantero sesion L-116  Usuario " + user.id  + " Contraseña " + user.contraseña)
    if(password != user.contraseña){
      console.log("Contraseña Incorrecta Sesion Repartidor L-90")
      res.send({"Response": "Contraseña Incorrecta"}); 
      return}
    console.log("Sesion Repartidor L-121  "+user.id)
    const sesion = await SesionRepartidor.findOne({
      where:{RepartidorId: user.id}
    });
    console.log("Sesion Repartidor L-97  " + sesion)
    res.json(sesion)
  } catch (e) {
    res.json(e);
  }
  
}); 

app.get('/logout',
  async function(req, res){
    const {username} = req.body;
    const user = await Repartidor.findOne({
      where:{ usuario: username }
    });
    SesionAuth("LoggedOut", user.id);
    
  });

// Middleware que verifica si esta autenticado
function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    next(); // pasa a la ruta
  } else {
    console.log("Usuario no autenticado");
    res.redirect('/login');
  }
}

app.get('/profile',
  isAuthenticated, // se pasa por middleware de autenticacion
  function(req, res){
    console.log("GetUser Recibido")
    res.json({ user: req.user });
    /* res.render('profile', { user: req.user }); */
  });

module.exports = app;