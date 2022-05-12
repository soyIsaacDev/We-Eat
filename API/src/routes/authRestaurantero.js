var express = require('express');
const res = require('express/lib/response');
var passport = require('passport');
//var Strategy = require('passport-local').Strategy;
var LocalStrategy = require('passport-local');
var app = express.Router();

const { ClienteRestaurantero, SesionRestaurantero} = require("../db");

// Autenticando al usuario con estrategia local de Passport
passport.use(new LocalStrategy(
    async (username, password, cb) => {
      try {
        console.log("AQUI ES AuthRestaurantero");
        const user= await ClienteRestaurantero.findOne({
          where:{usuario:username}
        });
        if(!user) {
          console.log("USUARIO INCORRECTO");
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        if(user.contraseña != password) {
          console.log("CONTRASEÑA INCORRECTA");
          return cb(null, false, { message: 'Incorrect password.' });
        }
        console.log("USUARIO DE PASSPORT LOCAL Loggeado Linea 26  -->>"+user.nombre + " ID "+ user.id)
        SesionAuth("LoggedIn", user.id)
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
));

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
      console.log("Paso por SesionAuth LoggedIn Linea 49");
      const sesion = await SesionRestaurantero.findOrCreate({
        where:{ClienteRestauranteroId: id},
        defaults:{
          autenticated: auth
        }
    });
    console.log("SesionAuth Login-->>"+ sesion)
    return(sesion);  //VER COMO REGRESO LA SESION
    };
    
    if(auth=== "LoggedOut"){
      const sesion = await SesionRestaurantero.findOne({
        where:{ClienteRestauranteroId: id}
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
    res.send(sesion);
  }
);

app.get('/sesionrestaurantero', async function(req, res) {
  try {
    const { usuario } = req.body;
    const user = await ClienteRestaurantero.findOne({
      where:{ usuario }
    });
    console.log(user.id)
    const sesion = await SesionRestaurantero.findOne({
      where:{ClienteRestauranteroId: user.id}
    });
    console.log("Get ./sesionrestaurantero Linea 132" + sesion);
    res.json(sesion)
  } catch (e) {
    res.json(e);
  }
});  

app.post('/sesionrestaurantero', async function(req, res) {
  const { username } = req.body;
  console.log("Linea 105"+ username);
  const user = await ClienteRestaurantero.findOne({
    where:{ usuario: username }
  });
  console.log("Post /sesionrestaurantero"+user.id)
  const sesion = await SesionRestaurantero.findOne({
    where:{ClienteRestauranteroId: user.id}
  });
  console.log("Sesion Restaurantero L113" + sesion)
  res.json(sesion)
}); 

app.get('/logout',
  async function(req, res){
    const {username} = req.body;
    const user = await ClienteRestaurantero.findOne({
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