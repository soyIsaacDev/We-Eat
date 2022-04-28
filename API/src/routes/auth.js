var express = require('express');
var passport = require('passport');
//var Strategy = require('passport-local').Strategy;
var LocalStrategy = require('passport-local');
var app = express.Router();
const { Clientes } = require("../db");

// Autenticando al usuario con estrategia local de Passport
passport.use(new LocalStrategy(
    async (username, password, cb) => {
      try {
        console.log("AQUI ES");
        const user= await Clientes.findOne({
          where:{usuario:username}
        });
        //console.log("USUARIO DE PASSPORT LOCAL  -->>"+user.nombre)
        if(!user) {
          console.log("USUARIO INCORRECTO");
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        if(user.contraseña != password) {
          console.log("CONTRASEÑA INCORRECTA");
          return cb(null, false, { message: 'Incorrect password.' });
        }
        console.log("USUARIO DE PASSPORT LOCAL  -->>"+user.nombre)
        return cb(null, user);
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
  
/* passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  const user= await Clientes.findOne({
    where:{id}
  });
  return cb(null, user);

  /* db.users.findById(id)
    .then((user) => {
      cb(null, user);
    })
    .catch(err => {
      return cb(err);
    }) 
});*/




//app.use(express.urlencoded({ extended: true }));
/* app.use(require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); */

/*app.use((req, res, next) => {
   console.log(req.session);
  console.log(req.user); 
  next();
});*/

app.post('/login/password',
  passport.authenticate('local', { 
    //succesRedirect: '/localhost:3000/',
    failureRedirect: '/login' 
  }),
  function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.redirect('http://localhost:3000/addRepartidor');  //Aqui dirigimos a donde deseamos (desde view servidor)
    //res.redirect('localhost:3000/addRepartidor');  //Aqui dirigimos a donde deseamos (desde react falla cors policy)
  }
  );

  
app.get('/login', function(req, res, next) {
  res.render('login');
});  
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

// Middleware que verifica si esta autenticado
function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    next(); // pasa a la ruta
  } else {
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