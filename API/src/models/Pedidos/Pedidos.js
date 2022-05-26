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
            type: DataTypes.ENUM("Colocado","Recibido", "En_Proceso","Listo", "Enviado", "Entregado"),
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