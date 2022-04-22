const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "RestaurantDetails", 
    {
        costoEnvio:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        horarios:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipoComida:{
            type: DataTypes.ENUM("Desayuno", "Desayuno y brunch", "Comida", "Cena", "Ensaladas"),
            allowNull: false 
        }
              
    },
    {
    timestamps: false,
    });
    
    
}