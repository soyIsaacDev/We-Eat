const server = require("express").Router();

const { Pedidos, Clientefinal, Restaurantes, Platillo, PedidosRestaurantes } = require("../db");

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
               status:"Colocado"
            },
            include: [{
                model: Restaurantes,
                through:{
                    where:{
                        RestauranteId
                    },
                    attributes:[]
                }
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

server.get("/restaurantPedido/:RestauranteId", async (req, res) => { 
    try {
        let {RestauranteId} = req.params;

        const pedido = await Restaurantes.findOne({
            where:{
               id:RestauranteId
            },
            include: [{
                model: Pedidos,
                where:{
                    status:"Colocado"
                },
                attributes:['id', 'cantidad', 'notas'],
                through:{
                    attributes:[]
                }
            }]
        });
        console.log(pedido);
        res.json(pedido)
    } catch (e) {
        res.json(e);
    }
});

server.get("/pedidoRestAll/:RestauranteId", async (req, res) => { 
    try {
        let {RestauranteId} = req.params;

        const pedido = await Restaurantes.findOne({
            where:{
               id:RestauranteId
            },
            include: [{
                model: Pedidos
            }]
        });
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

module.exports = server;