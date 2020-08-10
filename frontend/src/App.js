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
		fetch("/api/drinks")
			.then((res) => res.json())
			.then((drinks) => this.setState({ drinks }))
	}
	handleOnSubmit = (drink) => {
		fetch("/api/drinks", {
			method: "POST",
			body: JSON.stringify({
				name: drink.name,
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
		fetch(`/api/drinks/${drink.id}`, {
			method: "PATCH",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: drink.name, recipe: drink.recipe, availability: drink.availability }),
		}).then(this.getAllDrinks())
	}
	handleDelete = (id) => {
		fetch(`/api/drinks/${id}`, {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: id }),
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
