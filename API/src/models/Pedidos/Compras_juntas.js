const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "ComprasJuntas", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: false,
    });
}