module.exports = (sequelize, Sequelize) => {
      const Drink = sequelize.define("drink", {
        name: {
          type: Sequelize.STRING
        },
        ingredient: {
          type: Sequelize.STRING
        },
        availability: {
          type: Sequelize.BOOLEAN
        }
      });
    
      return Drink;
    };

/*
This Sequelize Model represents drink table in MySQL database. 
These columns will be generated automatically: id, name, ingredient, availability, createdAt, updatedAt.

After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:
create a new drink: create(object)
find a drink by id: findByPk(id)
get all drinks: findAll()
update a drink by id: update(data, where: { id: id })
remove a drink: destroy(where: { id: id })
remove all drinks: destroy(where: {})
find all drinks by name: findAll({ where: { name: ... } })
These functions will be used in our Controller.
*/