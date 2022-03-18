const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Restuaurantes", 
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
        activo:{
            type: DataTypes.ENUM("Activo", "Cerrado", "Pausa"),
            allowNull: false
        },
        /* imagen:{
            
        }, */
        estatus:{
            type: DataTypes.ENUM("Activo", "Inactivo","En_Registro", "En_Baja"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}