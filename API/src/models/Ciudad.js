const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Ciudad", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        ubicacion:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
    timestamps: false,
    });
}