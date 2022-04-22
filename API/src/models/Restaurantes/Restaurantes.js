const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
        "Restaurantes", 
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        area_de_reparto:{
            type: DataTypes.FLOAT,
            allowNull:false
        }, 
        actividad:{
            type: DataTypes.ENUM('Abierto', 'Cerrado', 'Pausa'),
            allowNull: false
        },
        estatus:{
            type: DataTypes.ENUM('Activo', 'Inactivo','En_Registro', 'En_Baja'),
            allowNull: false
        },
        urlTitle:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        route:{
            type: DataTypes.VIRTUAL,
            get () {
                return `/RestaurantDetails/${this.urlTitle}`
            }
        },
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
        hooks:{
            beforeValidate: Restaurantes =>  {
                Restaurantes.urlTitle = Restaurantes.nombre && Restaurantes.nombre.replace(/\s+/g, '_').replace(/[^\w-]+/g, '');
            }
        }
    
    },
    {
    timestamps: false,
    });
    
    
}