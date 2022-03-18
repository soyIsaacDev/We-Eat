const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Menu", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        }
    }, {
    timestamps: false,
    });
}