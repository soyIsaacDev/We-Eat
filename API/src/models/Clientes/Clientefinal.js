const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Clientefinal", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contraseña:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}