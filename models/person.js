module.exports = function(sequelize, DataTypes) {
  const Person = sequelize.define("Person", {
    person: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    livingDead: {
      type: DataTypes.STRING,
      allowNull: true
    },
    house: {
      type: DataTypes.STRING,
      allowNull: true
    },
    loyalty: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Person;
};
