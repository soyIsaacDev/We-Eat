const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Restaurantes", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        area_de_reparto:{
            type: DataTypes.INTEGER,
            allowNull:false
        }, 
        actividad:{
            type: DataTypes.ENUM('Abierto', 'Cerrado', 'Pausa'),
            allowNull: false
        },
        estatus:{
            type: DataTypes.ENUM('Activo', 'Inactivo','En_Registro', 'En_Baja'),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}