/*
When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), 
we need to determine how the server will reponse by setting up the routes.
These are our routes:
/api/drink: GET, POST, DELETE
/api/drink/:id: GET, PUT, DELETE
/api/drink/availability: GET
*/

module.exports = app => {
      const drinks = require("../controllers/drink.controller.js");
    
      var router = require("express").Router();
    
      // Create a new drink
      router.post("/", drinks.create);
    
      // Retrieve all drinks
      router.get("/", drinks.findAll);
    
      // Retrieve all available drinks
      router.get("/availability", drinks.findAllAvailability);
    
      // Retrieve a single drink with id
      router.get("/:id", drinks.findOne);
    
      // Update a drink with id
      router.put("/:id", drinks.udpate);
    
      // Delete a drink with id
      router.delete("/:id", drinks.delete);
    
      // Delete all drinks
      router.delete("/", drinks.deleteAll);
    
      app.use('/api/drinks', router);
    };