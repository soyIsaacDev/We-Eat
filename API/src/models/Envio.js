const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Envios", 
    {
        reparto: {
            type: DataTypes.ENUM("Buscando Repartidor", "Aceptado", "En_Restaurante", "Recibido", "Entregado"),
            allowNull:false
        },
        tiempo_promedio:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
    timestamps: false,
    });
}