//Dependencies
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/people/:person?", (req, res) => {
    if (req.params.person) {
      db.Person.findOne({
        where: {
          //seach function
          person: req.params.person
        }
      }).then(result => {
        return res.json(result);
      });
    } else {
      db.Person.findAll().then(result => {
        const characters = res.json(result);
        res.render("characters", { layout: "main", characters });
      });
    }
  });

  //find all houses
  // app.get("/api/house", (req,res)=>{
  //   db.House.findAll({}).then(function(dbHouse))
  // })
  // Add A New Character
  app.post("/people/new", (req, res) => {
    // const person = req.body;

    // Then add the character to the database using sequelize
    db.Person.create({
      person: person.person,
      title: person.title,
      livingDead: person.livingDead,
      houseId: person.house,
      loyalty: house.loyalty
    })
      .then(dbperson => {
        res.json(dbperson);
      })
      .catch(error => {
        res.status(422).send(error);
      });
  });

  //put
  app.put("/people/:id", (req, res) => {
    db.Person.update(
      {
        //update this code to work
        person: req.body.person,
        title: req.body.title,
        livingDead: req.body.livingDead,
        house: req.body.house,
        loyalty: req.body.loyalty
      },
      {
        where: {
          id: req.body.id
        }
      }
    )
      .then(dbPerson => {
        res.json(dbPerson);
      })
      .catch(error => {
        res.status(422).send(error);
      });
  });
};
