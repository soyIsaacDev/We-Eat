const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Ingredientes_extra", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: true,
            unique: true 
        }
    }, {
    timestamps: false,
    });
}