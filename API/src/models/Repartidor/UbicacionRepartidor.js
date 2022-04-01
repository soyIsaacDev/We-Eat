const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "UbicacionRepartidor", 
    {
        ubicacion:{
            type:DataTypes.INTEGER,
            allowNull: true
        }
    }, {
    timestamps: false,
    });
}