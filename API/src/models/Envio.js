const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Envios", 
    {
        tiempo_promedio:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo_de_Entrega:{
            type: DataTypes.ENUM("Entrega", "Recoleccion"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}