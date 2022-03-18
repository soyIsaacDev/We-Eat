const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Metodos_de_pago", 
    {
        metodo_pago:{
            type: DataTypes.ENUM("Efectivo", "Tarjeta"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}