const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Platillo", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
        /* imagen: {} */

    }, {
    timestamps: false,
    });
}