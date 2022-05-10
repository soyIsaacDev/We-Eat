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
            type: DataTypes.ENUM("Recibido", "En_Proceso","Listo", "Enviado", "Entregado"),
            allowNull:false
        }, 
        notas:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: true,
    });
}