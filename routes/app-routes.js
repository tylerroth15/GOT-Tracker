//Dependencies
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/:person?", function(req, res) {
      if (req.params.person) {
        db.Person.findOne({
          where: {
              //seach function
            routeName: req.params.person
          }
        }).then(function(result) {
          return res.json(result);
        });
      } else {
        db.Person.findAll().then(function(result) {
          return res.json(result);
        });
      }
    });
  
    // Add A New Character
    app.post("/api/person", function(req, res) {
        const person = req.body;

      // Then add the character to the database using sequelize
     db.Person.create({
        person: person.person,
        title: person.title,
        livingDead: person.livingDead,
      }).then(function(dbperson){
          res.json(dbperson);
      }).catch(function(error){
          res.status(422).send(error);
      });
    });
    
    //put
    app.put("/api/person", function(req, res) {
        db.Person.update(
          req.body.text,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbPost) {
          res.json(dbPost);
        });
      });
    };
    
//   };

