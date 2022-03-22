const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "MetodosdePago", 
    {
        metodo_pago:{
            type: DataTypes.ENUM("Efectivo", "Tarjeta"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}