module.exports = function(sequelize, DataTypes) {
  const House = sequelize.define("House", {
    House: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  return House;
};
