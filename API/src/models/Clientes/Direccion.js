const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Direccion", 
    {
        direccion:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}