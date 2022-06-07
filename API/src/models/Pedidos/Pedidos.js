const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Pedidos", 
    {
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM("Colocado","Recibido", "En_Proceso",
            "Listo","En_Camino", "Entrega_Lista",  "Entregado"),
            allowNull:true
        },
        reparto: {
            type: DataTypes.ENUM("Repartir", "Aceptado", "Entregado"),
            allowNull:true
        },
        notas:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: true,
    });
}