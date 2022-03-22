const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "PedidoGrupal", 
    {
        notas:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        }
    }, {
    timestamps: false,
    });
}