const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "UbicacionRepartidor", 
    {
        ubicacion:{
            type:DataTypes.JSONB,
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}