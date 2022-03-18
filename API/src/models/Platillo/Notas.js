const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Notas", 
    {
        nota:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
    timestamps: false,
    });
}