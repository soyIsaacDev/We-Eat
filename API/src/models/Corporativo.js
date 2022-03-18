const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Corporativo", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
    timestamps: false,
    });
}