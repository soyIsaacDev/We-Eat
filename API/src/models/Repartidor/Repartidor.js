const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Repartidor", 
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
        },
        estatus:{
            type: DataTypes.ENUM("Activo", "Repartiendo", "Pausa", "En_Registro",
             "En_Baja", "Baja"),
             allowNull: false
        }
    }, {
    timestamps: false,
    });
}