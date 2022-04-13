
const {Sequelize, Op} = require('sequelize');

const  modelCorporativo = require("./models/Corporativo");
const  modelCiudad = require("./models/Ciudad");
const  modelEnvio = require("./models/Envio");
const  modelEvaluaciones = require("./models/Evaluaciones");
const  modelImgRest = require("./models/ImagenRestaurante");
const  modelMenu = require("./models/Menu");
const  modelRestaurantes = require("./models/Restaurantes");
const  modelTipodeComida = require("./models/TipoDeComida");
const  modelClientes = require("./models/Clientes/Clientes");
const  modelDireccion = require("./models/Clientes/Direccion");
const  modelMetodosdePago = require("./models/Clientes/MetodosdePago");
const  modelComprasJuntas = require("./models/Pedidos/Compras_juntas");
const  modelPedidoGrupal = require("./models/Pedidos/Grupal");
const  modelPedidos = require("./models/Pedidos/Pedidos");
const  modelIngredientesExtra = require("./models/Platillo/Ingredientes_extra");
const  modelIngredientesaQuitar = require("./models/Platillo/Ingredientes_quitar");
const  modelIngredientes = require("./models/Platillo/Ingredientes");
const  modelPlatillo = require("./models/Platillo/Platillo");
const  modelSelecciondeIngredientes = require("./models/Platillo/Seleccion_Ingredientes");
const  modelRepartidor = require("./models/Repartidor/Repartidor");
const  modelImgPlatillo = require("./models/Platillo/ImagenPlatillo");
const  modelUbicacionRepartidor = require("./models/Repartidor/UbicacionRepartidor");


const sequelize = new Sequelize("postgres://postgres:Postgres@localhost:5432/we_eat",{
    logging: false   //Loging Deshabilitado
});

modelCorporativo(sequelize);
modelCiudad(sequelize);
modelEnvio(sequelize);
modelEvaluaciones(sequelize);
modelImgRest(sequelize);
modelMenu(sequelize);
modelRestaurantes(sequelize);
modelTipodeComida(sequelize);
modelClientes(sequelize);
modelDireccion(sequelize);
modelMetodosdePago(sequelize);
modelComprasJuntas(sequelize);
modelPedidoGrupal(sequelize);
modelPedidos(sequelize);
modelIngredientesExtra(sequelize);
modelIngredientesaQuitar(sequelize);
modelIngredientes(sequelize);
modelPlatillo(sequelize);
/* modelSelecciondeIngredientes(sequelize); */
modelRepartidor(sequelize);
modelImgPlatillo(sequelize);
modelUbicacionRepartidor(sequelize);


let {Corporativo, /* Ciudad, */ Envios, Evaluaciones, ImgRest, Menu, Restaurantes, 
    TipodeComida, Clientes, Direccion, MetodosdePago, Pedidos, PedidoGrupal, 
    Platillo, IngredientesExtra, IngredientesaQuitar, Ingredientes,
    ComprasJuntas, Repartidor, ImgPlatillo, UbicacionRepartidor} = sequelize.models;

/* Relaciones de DB */
Corporativo.hasMany(Restaurantes);
Restaurantes.belongsTo(Corporativo);
Restaurantes.hasOne(TipodeComida);
TipodeComida.belongsTo(Restaurantes);
//Envios.hasMany(Repartidor);
//Repartidor.belongsTo(Envios);
Envios.belongsTo(Repartidor)
Restaurantes.hasMany(Envios);
Envios.belongsTo(Restaurantes);
Restaurantes.hasMany(Evaluaciones);
Evaluaciones.belongsTo(Restaurantes)
/* Los clientes pueden hacer un pedido a varios restaurantes */
Restaurantes.belongsToMany(Pedidos, {through:"PedidosRestaurantes"});
Pedidos.belongsToMany(Restaurantes, {through:"PedidosRestaurantes"});

Clientes.hasMany(Pedidos);
Pedidos.belongsTo(Clientes);
Clientes.hasMany(MetodosdePago);
MetodosdePago.belongsTo(Clientes);
/* El cliente puede tener muchas direcciones y las direcciones ser de varios clientes */
Clientes.belongsToMany(Direccion, {through:"DireccionClientes"});
Direccion.belongsToMany(Clientes, {through:"DireccionClientes"});

Restaurantes.hasOne(Direccion);
Direccion.belongsTo(Restaurantes);
Repartidor.hasOne(Direccion);
Direccion.belongsTo(Repartidor);
Pedidos.hasMany(PedidoGrupal);
PedidoGrupal.belongsTo(Pedidos);
PedidoGrupal.belongsToMany(Clientes, {through:"PedidoGrupalClientes"});
Clientes.belongsToMany(PedidoGrupal, {through:"PedidoGrupalClientes"});
Pedidos.hasOne(Evaluaciones);
Evaluaciones.belongsTo(Pedidos);
Repartidor.hasOne(Evaluaciones);
Evaluaciones.belongsTo(Repartidor);
Platillo.belongsToMany(ComprasJuntas, {through:"PlatillosJuntos"});
ComprasJuntas.belongsToMany(Platillo, {through:"PlatillosJuntos"});
Platillo.belongsToMany(Ingredientes, {through:"IngredientesPlatillos"});
Ingredientes.belongsToMany(Platillo, {through:"IngredientesPlatillos"});
/* SelecciondeIngredientes.belongsToMany(Platillo, {through:"SelecciondeIngredientesPlatillos"});
Platillo.belongsToMany(SelecciondeIngredientes, {through:"SelecciondeIngredientesPlatillos"}); */
IngredientesExtra.belongsToMany(Platillo, {through:"IngredientesExtraPlatillos"});
Platillo.belongsToMany(IngredientesExtra, {through:"IngredientesExtraPlatillos"});
IngredientesaQuitar.belongsToMany(Platillo, {through:"IngredientesaQuitarPlatillos"});
Platillo.belongsToMany(IngredientesaQuitar, {through:"IngredientesaQuitarPlatillos"});
Restaurantes.hasOne(Menu);
Menu.belongsTo(Restaurantes);
Menu.hasMany(Platillo);
Platillo.belongsTo(Menu);
Restaurantes.hasOne(ImgRest);
ImgRest.belongsTo(Restaurantes);
Platillo.hasOne(ImgPlatillo);
ImgPlatillo.belongsTo(Platillo);
UbicacionRepartidor.belongsTo(Repartidor);




module.exports = {
    ...sequelize.models,
    db: sequelize,
    Op
};