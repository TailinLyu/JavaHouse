import React, { Component } from "react"
import DashBoard from "./components/DashBoard"
import "./App.css"

class App extends Component {
	state = {
		drinks: [],
	}

	componentDidMount() {
		this.getAllDrinks()
	}

	getAllDrinks = () => {
		fetch("/drinks-detail")
			.then((res) => res.json())
			.then((drinks) => this.setState({ drinks }))
	}
	handleOnSubmit = (drink) => {
		fetch("/drinks", {
			method: "POST",
			body: JSON.stringify({
				drinkName: drink.drinkName,
				recipe: drink.recipe,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			console.log(res)
		}).then(this.getAllDrinks())
	}
	handleEdit = (drink) => {
		fetch(`/drinks/${drink.drinkId}`, {
			method: "PATCH",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ recipe: drink.recipe }),
		}).then(this.getAllDrinks())
	}
	handleDelete = (drinkId) => {
		fetch(`/drinks/${drinkId}`, {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ drinkId: drinkId }),
		}).then(this.getAllDrinks())
	}
	render() {
		return (
			<div className="App">
				<DashBoard
					drinks={this.state.drinks}
					handleEdit={this.handleEdit}
					handleOnSubmit={this.handleOnSubmit}
					handleDelete={this.handleDelete}
				/>
			</div>
		)
	}
}

export default App
