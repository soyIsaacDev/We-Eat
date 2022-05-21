var express = require('express');
var passport = require('passport');
//var Strategy = require('passport-local').Strategy;
var LocalStrategy = require('passport-local');
var app = express.Router();

const { Clientefinal, Sesion, ClienteRestaurantero } = require("../db");

// Autenticando al usuario con estrategia local de Passport
passport.use(new LocalStrategy(
    async (username, password, cb) => {
      try {
        console.log("AQUI ES Auth");
        const user= await Clientefinal.findOne({
          where:{usuario:username}
        });
        const restaurantUser= await ClienteRestaurantero.findOne({
          where:{usuario:username}
        });

        console.log("usuario"+ user )
        console.log("restaurantero"+ restaurantUser)
        //console.log("USUARIO DE PASSPORT LOCAL  -->>"+user.nombre)
        if(!user & !restaurantUser) {
          console.log("USUARIO INCORRECTO");
          return cb(null, false, { message: 'Incorrect username or password.' });
        }

        if(user){
          if(user.contraseña != password) {
            console.log("CONTRASEÑA INCORRECTA");
            return cb(null, false, { message: 'Incorrect password.' });
          }
          console.log("USUARIO DE PASSPORT LOCAL Loggeado Linea 26  -->>"+user.nombre + " ID "+ user.id)
          SesionAuth("LoggedIn", user.id)
          return cb(null, user)
        }
        if(restaurantUser){
          if(restaurantUser.contraseña != password) {
            console.log("CONTRASEÑA INCORRECTA");
            return cb(null, false, { message: 'Incorrect password.' });
          }
          console.log("USUARIO DE PASSPORT LOCAL Loggeado Linea 26  -->>"+restaurantUser.nombre + " ID "+ restaurantUser.id)
          SesionAuth("LoggedIn", restaurantUser.id)
          return cb(null, restaurantUser);
        }
        
      } catch (error) {
        return cb(error);
      }
    }
));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

const SesionAuth = async (auth, id) => { 
  
  try {
    if(auth=== "LoggedIn"){
      console.log("Paso por SesionAuth LoggedIn Linea 51");
      const sesion = await Sesion.findOrCreate({
        where:{ClientefinalId: id},
        defaults:{
          autenticated: auth
        }
    });
    console.log("SesionAuth Login L-58 -->>"+ sesion)
    return(sesion); 
    };
    if(auth=== "LoggedOut"){
      const sesion = await Sesion.findOne({
        where:{ClientefinalId: id}
      })
      sesion.autenticated = auth;
      await sesion.save();
      console.log("SesionAuth Logout-->>"+ sesion)
      return(sesion);
    }
  } catch (e) {
    return(e);
  }
};

app.post('/logincliente/password',
  passport.authenticate('local', { 
    failureRedirect: '/login' 
  }),
  function(req, res) {
  }
);


app.get('/sesion', async function(req, res) {
  try {
    const { username, password } = req.body;
    const user = await Clientefinal.findOne({
      where:{ usuario: username }
    });
    console.log("SesionAuth L-127 " + user.id + user.contraseña)
    if(password != user.contraseña){
      console.log("Contraseña Incorrecta SesionAuth L-97")
      res.send("Contraseña Incorrecta"); 
      return
    }
    const sesion = await Sesion.findOne({
      where:{ClientefinalId: user.id}
    });
    console.log("SesionAuth Linea 104" + sesion);
    res.json(sesion)    
  } catch (e) {
    res.json(e);
  }
});  

app.post('/sesion', async function(req, res) {
  try {
    const { username, password } = req.body;
    console.log(`SesionAuth L-114 ${username}`);
    const user = await Clientefinal.findOne({
      where:{ usuario: username }
    });
    console.log("SesionAuth L-118 " + user.id + " " + user.contraseña)
    if(password != user.contraseña){
      console.log("Contraseña Incorrecta SesionAuth L-120")
      res.send({"Response": "Contraseña Incorrecta"}); 
      return
    }
    console.log("SesionAuth L-124  "+user.id)

    const sesion = await Sesion.findOne({
      where:{ ClientefinalId: user.id }
    });
    console.log("SesionAuth L-129  "+sesion)
    res.json(sesion)
  } catch (e) {
    res.json(e);
  }
  
}); 

app.get('/logout',
  async function(req, res){
    try {
      const {username} = req.body;
      const user = await Clientefinal.findOne({
      where:{ usuario: username }
      })
      SesionAuth("LoggedOut", user.id);
    } catch (e) {
      res.json(e);
    }
  }
);

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
    res.json({ user: req.user });
    /* res.render('profile', { user: req.user }); */
  });

module.exports = app;