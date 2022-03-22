const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "TipodeComida", 
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