const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Envios", 
    {
        tiempo_promedio:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Entrega:{
            type: DataTypes.ENUM("Entega", "Recoleccion"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}