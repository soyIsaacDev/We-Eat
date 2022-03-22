const {DataTypes} = require ('sequelize');

module.exports = s => {
    s.define(
      "ImgPlatillo", 
      {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB("long"),
      },
    });
  
  };
  