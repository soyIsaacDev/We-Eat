const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "ClienteRestaurantero", 
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
        tipo_de_usuario:{
            type: DataTypes.ENUM("Director_General","Gerente_Regional",
                    "Gerente_Restaurant", "Cajero", "Cocinero"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}