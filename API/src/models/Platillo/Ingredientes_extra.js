const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "IngredientesExtra", 
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