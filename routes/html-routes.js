// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page

    // commented out below code to test render functionality
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("welcome.handlebars");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page

    // commented out below code to test render functionality
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login.handlebars");
  });

  app.get("/signup", (req, res) => {
    res.render("signup.handlebars");
  });

  app.get("/map", (req, res)=>{
    res.render("map.handlebars")
  });

  app.get("/house", (req, res)=>{
    res.render("house.handlebars")
  });

  app.get("/characters", (req, res)=>{
    res.render("characters.handlebars")
  });
  
  app.get("/newperson", (req, res) => {
    res.render("newperson.handlebars");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
