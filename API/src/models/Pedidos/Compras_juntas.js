const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Compras_juntas", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: false,
    });
}