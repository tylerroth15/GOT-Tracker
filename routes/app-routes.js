//Dependencies
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:person?", (req, res) => {
    if (req.params.person) {
      db.Person.findOne({
        where: {
          //seach function
          routeName: req.params.person
        }
      }).then(result => {
        return res.json(result);
      });
    } else {
      db.Person.findAll().then(result => {
        return res.json(result);
      });
    }
  });

  // Add A New Character
  app.post("/api/new", (req, res) => {
    const person = req.body;

    // Then add the character to the database using sequelize
    db.Person.create({
      person: person.person,
      title: person.title,
      livingDead: person.livingDead
    })
      .then(dbperson => {
        res.json(dbperson);
      })
      .catch(error => {
        res.status(422).send(error);
      });
  });

  //put
  app.put("/api/update", (req, res) => {
    db.Person.update(
      {
        //update this code to work
        text: req.body.text,
        complete: req.body.complete
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(dbPerson => {
      res.json(dbPerson);
    });
  });
};
