module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
      person: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      living_dead: {
        type: DataTypes.BOOLEAN,
        defaultValue: "true"
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