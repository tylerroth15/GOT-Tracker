const person = require("./person");

module.exports = function(sequelize, DataTypes) {
    var House = sequelize.define("House", {
        House: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },      
    });

  

    return House;
  };