module.exports = function(sequelize, DataTypes) {
    var Loyalty = sequelize.define("Loyalty", {
        Loyalty: {
        type: DataTypes.STRING,
        allowNull: true,
      },      
    });

  

    return Loyalty;
  };