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
      type: DataTypes.BOOLEAN
    }
  });

  Person.associate = function(models) {
    Person.belongsTo(models.House, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Person;
};
