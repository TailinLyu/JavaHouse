/*
CRUD functions:
create
findAll
findOne
update
delete
deleteAll
findAllAvailability
*/
const db = require("../models");
const Drink = db.drinks;
const Op = db.Sequelize.Op;

// Create and save a new drink
exports.create = (req, res) => {
      // Validate request
      if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a drink
      const drink = {
        name: req.body.name,
        ingredient: req.body.ingredient,
        availability: req.body.availability ? req.body.availability : false
      };
    
      // Save drink in the database
      Drink.create(drink)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Drink."
          });
        });
    };
    

// Retrieve all Drinks from the database.
exports.findAll = (req, res) => {
    
      Drink.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving drink."
          });
        });
    };

// Retreve a single object. Find a single Drink with an id
exports.findOne = (req, res) => {
      const id = req.params.id;
    
      Drink.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Drink with id=" + id
          });
        });
    };

// Update an object. Update a Drink by the id in the request
exports.udpate = (req, res) => {
      const id = req.params.id;
    
      Drink.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Drink was updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Drink with id=${id}. Maybe Drink was not found or req.body is empty!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Drink with id=" + id
          });
        });
    };

// Delete an Object. Delete a Drink with the specified id in the request
exports.delete = (req, res) => {
      const id = req.params.id;
    
      Drink.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Drink was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Drink with id=${id}. Maybe Drink was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Drink with id=" + id
          });
        });
    };

// Delete all objects. Delete all Drinks from the database.
exports.deleteAll = (req, res) => {
      Drink.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Drink were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Drinks."
          });
        });
    };

// Find all objects by condition. Find all available Drinks.
exports.findAllAvailability = (req, res) => {
      Drink.findAll({ where: { availability: true } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving drinks."
          });
        });
    };
