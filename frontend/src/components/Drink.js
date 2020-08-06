import React, { Component } from "react"

class Drink extends Component {

	state = {
		recipe: ''
	}

	handleChange = (event) => {
		this.setState({recipe: event.target.value});
	}
	handleEdit = (event, drink) => {
		event.preventDefault()
		const recipe = this.state.recipe
		drink = {...drink, recipe: recipe}
		this.props.handleEdit(drink)
	}
	handleDelete = (event, drinkId) => {
		event.preventDefault()
		this.props.handleDelete(drinkId)
	}
	render() {
		const drink = this.props.drink
		return (
			<div>
				<h3>{drink.drinkName}</h3>
				<form onSubmit={(event) => (this.handleEdit(event, drink))}>
					<textarea defaultValue={drink.recipe} onChange={this.handleChange} ></textarea>
					<input type="submit" value="Submit"/>
					<button type="button" onClick={(event) => (this.handleDelete(event, drink.drinkId))}>Delete</button>
				</form>
				
			</div>
		)
	}
}

export default Drink
