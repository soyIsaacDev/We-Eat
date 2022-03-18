
const {Sequelize, Op} = require('sequelize');

const  modelCorporativo = require("./models/Corporativo");
const  modelCiudad = require("./models/Ciudad");
const  modelEnvio = require("./models/Envio");
const  modelEvaluaciones = require("./models/Evaluaciones");
const  modelImg = require("./models/Image");
const  modelMenu = require("./models/Menu");
const  modelRestaurantes = require("./models/Restaurantes");
const  modelTipodeComida = require("./models/TipoDeComida");
const  modelClientes = require("./models/Clientes/Clientes");
const  modelDireccion = require("./models/Clientes/Direccion");
const  modelMetodosdePago = require("./models/Clientes/MetodosdePago");
const  modelComprasJuntas = require("./models/Pedidos/Compras_juntas");
const  modelGrupal = require("./models/Pedidos/Grupal");
const  modelPedidos = require("./models/Pedidos/Pedidos");
const  modelIngredientesExtra = require("./models/Platillo/Ingredientes_extra");
const  modelIngredientesaQuitar = require("./models/Platillo/Ingredientes_quitar");
const  modelIngredientes = require("./models/Platillo/Ingredientes");
const  modelNotas = require("./models/Platillo");
const  modelPlatillo = require("./models/Platillo");
const  modelSelecciondeIngredientes = require("./models/Platillo/Seleccion_Ingredientes");
const  modelRepartidor = require("./models/Repartidor/Repartidor");


const sequelize = new Sequelize("postgres://postgres:Postgres@localhost:5432/we_eat",{
    logging: false   //Deshabilita el logging
});

//  se pasa la instancia de sequelize definida en el modelo -- para poder accederlo
modelCorporativo(sequelize);
modelCiudad(sequelize);
modelEnvio(sequelize);
modelEvaluaciones(sequelize);
modelImg(sequelize);
modelMenu(sequelize);
modelRestaurantes(sequelize);
modelTipodeComida(sequelize);
modelClientes(sequelize);
modelDireccion(sequelize);
modelMetodosdePago(sequelize);
modelComprasJuntas(sequelize);
modelGrupal(sequelize);
modelPedidos(sequelize);
modelIngredientesExtra(sequelize);
modelIngredientesaQuitar(sequelize);
modelIngredientes(sequelize);
modelNotas(sequelize);
modelPlatillo(sequelize);
modelSelecciondeIngredientes(sequelize);
modelRepartidor(sequelize);


let {Corporativo, Ciudad, Envios, Evaluaciones, Img, Menu, Restaurantes, TipodeComida, Clientes, Direccion,
MedodosdePago, ComprasJuntas, Grupal, Pedidos, IngredientesExtra, IngredientesaQuitar, Ingredientes, 
Notas, Platillo, SelecciondeIngredientes, Repartidor} = sequelize.models;


Restaurantes.hasMany(Clientes);
Restaurantes.hasOne(TipodeComida);
Restaurantes.belongsToMany(Repartidor, {through:"RepartidorRestaurante"});
Repartidor.belongsToMany(Restaurantes, {through:"RepartidorRestaurante"});
Restaurantes.hasMany(Envios);
Evaluaciones.belongsToMany(Restaurantes, {through: "EvaluacionRestaurantes"});
Restaurantes.belongsToMany(Evaluaciones, {through: "EvaluacionRestaurantes"});
Restaurantes.belongsToMany(Pedidos, {through:"PedidosRestaurantes"});
Pedidos.belongsToMany(Restaurantes, {through:"PedidosRestaurantes"});


Restaurantes.hasOne(Imagen);
Menu.belongsTo(Restaurantes);

// copiamos modelos y nos llevamos sequelize
module.exports = {
    ...sequelize.models,
    db: sequelize,
    Op
};