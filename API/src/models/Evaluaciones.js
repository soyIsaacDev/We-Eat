const {DataTypes} = require ('sequelize');

/* Evaluar si debo separar evaluacion restaurant y
   evaluacion repartidor */

module.exports = s => {
    s.define(
        "Evaluaciones", 
    {
        Rating:{
            type: DataTypes.ENUM("1,2,3,4,5"),
            allowNull: false,
            unique: true 
        },
        Tipo:{
            type: DataTypes.ENUM("Restaurante", "Repartidor")
        },
        Comentario_publico:{
            type: DataTypes.STRING,
            allowNull: true
        },
        Comentario_privado:{
            type:DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: false,
    });
}