const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Menu", 
    {
        nombre:{
            type: DataTypes.ENUM(
                "Desayuno", "Comida", "Cena", "Brunch", "Ensalada", "Sopa", "Bebidas", 
                "Postres", ),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}