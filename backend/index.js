const express = require("express")
const { Sequelize, DataTypes } = require("sequelize")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
const port = 5000

const sequelize = new Sequelize("JavaHouse", "root", "disasterrelief11", {
	host: "localhost",
	dialect: "mysql",
})

try {
	sequelize
		.authenticate()
		.then(() => console.log("Connection has been established successfully."))
} catch (error) {
	console.error("Unable to connect to the database:", error)
}

const Drinks = sequelize.define(
	"User",
	{
		// Model attributes are defined here
		drinkId: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		drinkName: {
			type: DataTypes.STRING,
		},
		recipe: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: "Drinks",
	}
)

Drinks.sync().then(() => console.log("Drinks table has been created"))
// const americano = Drinks.build({drinkId:1})
// americano.destroy().then(() => console.log('Americano has been destroyed'))
app.get("/", (req, res) => {
	res.send("Welcome to the Java House!")
})

app.get("/drinks-detail", async (req, res) => {
	const drinkDetails = []
	;(await Drinks.findAll()).forEach((drink) =>
		drinkDetails.push({
			drinkId: drink.drinkId,
			drinkName: drink.drinkName,
			recipe: drink.recipe,
		})
	)
	res.send(drinkDetails)
})

app.get("/drinks-detail/:id", async (req, res) => {
	const drink = await Drinks.findByPk(req.params.id)
	const drinkDetail = {
		drinkId: drink.drinkId,
		drinkName: drink.drinkName,
		recipe: drink.recipe,
    }
    res.send(drinkDetail)
})
app.get("/drinks", async (req, res) => {
    const drinkNames = [];
    (await Drinks.findAll()).forEach((drink) =>
		drinkNames.push(drink.drinkName)
	)
	res.send(drinkNames)
})

app.patch("/drinks/:id", async (req, res) => {
	const drink = await Drinks.findByPk(req.params.id) //.then((data) => res.send(data))
	const drinkName = req.body.drinkName || drink.drinkName
	const recipe = req.body.recipe || drink.recipe
	drink.drinkName = drinkName
	drink.recipe = recipe
	drink
		.save()
		.then(() =>
			console.log(`Drink has been updated by ${drinkName} with ${recipe}`)
		)
	res.send(`Drink has been updated by ${drinkName} with ${recipe}`)
})

app.delete("/drinks/:id", (req, res) => {
	const drink = Drinks.build({ drinkId: req.params.id })
	drink
		.destroy()
		.then(() => res.send(`The Drink ${req.params.id} has been deleteed`))
})
app.post("/drinks", function (req, res) {
	console.log(req.body)
	const drinkName = req.body.drinkName
	const recipe = req.body.recipe
	const drink = Drinks.build({ drinkName: drinkName, recipe: recipe })
	drink.save().then(() => console.log("Americano has been created"))
	res.send(`A new drink has been posted: ${drinkName} with ${recipe}`)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
