const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Tipo_de_comida", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        }
    }, {
    timestamps: false,
    });
}