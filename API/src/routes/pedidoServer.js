const server = require("express").Router();

const { Pedidos, Clientefinal, Restaurantes, Platillo } = require("../db");

// cantidad,  status:"Recibido", "En_Proceso","Listo", "Enviado", "Entregado", 
// notas, nombreCliente

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
        res.json(pedido);
    } catch (e) {
        res.json(e);
    }
});

server.get("/pedido:restID", async (req, res) => { 
    try {
        const {restID} = req.params;
        const pedido = Pedidos.findAll({
            include: {
                model: Restaurantes,
                attributes: ['nombre','id'],
              },
        })
    } catch (e) {
        res.json(e);
    }
})