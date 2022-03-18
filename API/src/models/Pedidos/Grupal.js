const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Pedido_Grupal", 
    {
        notas:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        }
    }, {
    timestamps: false,
    });
}