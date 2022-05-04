const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Sesion", 
    {
        autenticated:{
            type: DataTypes.ENUM("LogedIn","LogedOut"),
            allowNull: false
        }
    }, {
    timestamps: false,
    });
}