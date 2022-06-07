const server = require("express").Router();
const { Op } = require("sequelize");

const { Pedidos, Clientefinal, Restaurantes, Platillo, PedidosRestaurantes } = require("../db");
const Direccion = require("../models/Clientes/Direccion");

server.post("/agregarpedido", async (req, res) => { 
    try {
        const { cantidad, status, notas, idCliente, idRestaurant, nombrePlatillo } = req.body;  
        const pedido = await Pedidos.create({
            cantidad,
            status,
            notas
        });

        const cliente = await Clientefinal.findOne({
            where:{
                id: idCliente
            }
        })
        const restaurant = await Restaurantes.findOne({
            where:{
                id: idRestaurant
            }
        })
        const platillo = await Platillo.findOne({
            where:{
                nombre: nombrePlatillo
            }
        })
        console.log(pedido)

        pedido.addRestaurantes(restaurant);
        //restaurant.addPedidos(pedido); 
        pedido.addPlatillo(platillo);
        //platillo.addPedidos(pedido);
        //cliente.addPedidos(pedido);
        pedido.setClientefinal(cliente);

        res.json(pedido);
    } catch (e) {
        res.json(e);
    }
});

server.get("/pedido/:RestauranteId", async (req, res) => { 
    try {
        let {RestauranteId} = req.params;

        const pedido = await Pedidos.findAll({
            where:{
                [Op.or]:[{status:"Colocado"},{status:"Recibido"}, {status: "En_Proceso"}, {status: "Listo"} ]
               
            },
            include: [{
                model: Restaurantes,
                through:{
                    where:{
                        RestauranteId
                    },
                    attributes:[]
                }
            }],
            include: [{
                model: Platillo
            }]
        });
        /* const platillo = await pedido.getPlatillo();
        const cliente = await pedido.getClientefinal(); */
        res.json(pedido)
        /* res.json(pedido? pedido : "No existe el pedido"); */
    } catch (e) {
        res.json(e);
    }
});
// Mejor ordenado pero 
// NO acepta modelo Pedidos junto con modelo Platilo  ??
server.get("/restaurantPedido/:RestauranteId", async (req, res) => { 
    try {
        let {RestauranteId} = req.params;
        //console.log(RestauranteId + "Estatus"+ status)
        const pedido = await Restaurantes.findOne({
            where:{
               id:RestauranteId
            },
            include: [{
                model: Platillo,
                attributes:['id', 'nombre']
            }],
            include: [{
                model: Pedidos,
                /* where:{
                    status:"Colocado"
                }, */
                attributes:['id', 'cantidad', 'notas'],
                /* through:{
                    attributes:[]
                } */
            }],

        });
        console.log(pedido);
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

// cambiar status
server.get("/cambiarStatus/:PedidoId/:status", async (req, res) => { 
    try {
        let {PedidoId, status} = req.params;

        const pedido = await Pedidos.findOne({
            where:{
               id:PedidoId
            }
        });
        pedido.status= status;
        await pedido.save();
        console.log(pedido);
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

server.get("/todosLosPedidos/:status", async (req, res) => { 
    try {
        let {status} = req.params;
        const pedido = await Pedidos.findAll({
            where:{
               status
            },
            include: [{
                model: Restaurantes/* ,
                attributes:[id, nombre] */
            }]
        });
        console.log(pedido)
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

//Pedidos en Reparto
server.get("/pedidosreparto/:reparto", async (req, res) => { 
    try {
        let {reparto} = req.params;
        const pedido = await Pedidos.findAll({
            where:{
               reparto
            },
            include: [{
                model: Restaurantes/* ,
                through:{
                    attributes:[id, nombre, direccion, location]
                } */
                
            }, {
                model: Platillo
            }]
        });
        console.log(pedido)
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
}); 
server.get("/todosLosPedidosCliente/:ClientefinalId", async (req, res) => { 
    try {
        let {ClientefinalId} = req.params;
        const pedido = await Pedidos.findAll({
            where:{
               ClientefinalId,
               [Op.or]:[{status:"Colocado"},{status:"Recibido"}, {status: "En_Proceso"}, {status: "Listo"} ]
            }
        });
        console.log(pedido)
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

server.get("/pedidobyId/:PedidoId", async (req, res) => { 
    try {
        let {PedidoId} = req.params;

        const pedido = await Pedidos.findAll({
            where:{
                id:PedidoId
            }
        });
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

// Cambiar Reparto (para asignar repartidor)
server.get("/cambiarReparto/:PedidoId/:reparto", async (req, res) => { 
    try {
        let {PedidoId, reparto} = req.params;

        const pedido = await Pedidos.findOne({
            where:{
               id:PedidoId
            }
        });
        pedido.reparto= reparto;
        await pedido.save();
        console.log(pedido);
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

module.exports = server;