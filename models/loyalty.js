module.exports = function(sequelize, DataTypes) {
  const Loyalty = sequelize.define("Loyalty", {
    Loyalty: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Loyalty;
};
