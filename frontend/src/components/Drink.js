import React, { Component } from "react"

class Drink extends Component {
	state = {
		recipe: "",
		name: "",
		availability: false
	}

	handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		this.setState({ [name]: value })
	}
	handleEdit = (event, drink) => {
		event.preventDefault()
		const { recipe, name, availability } = this.state
		drink = { ...drink, recipe: recipe, name: name, availability: availability }
		console.log(drink)
		this.props.handleEdit(drink)
	}
	handleDelete = (event, id) => {
		event.preventDefault()
		this.props.handleDelete(id)
	}
	handleClick = (event) => {
		this.setState({
			availability: event.target.checked
		})
	}
	render() {
		const drink = this.props.drink
		return (
			<div>
				<form onSubmit={(event) => this.handleEdit(event, drink)}>
					<textarea
						defaultValue={drink.name}
						name="name"
						onChange={this.handleChange}
					></textarea>
					<textarea
						defaultValue={drink.recipe}
						name="recipe"
						onChange={this.handleChange}
					></textarea>
					<input
						type="checkbox"
						defaultChecked={drink.availability}
						onClick={this.handleClick}
					/>
					<input type="submit" value="Submit" />
					<button
						type="button"
						onClick={(event) => this.handleDelete(event, drink.id)}
					>
						Delete
					</button>
				</form>
			</div>
		)
	}
}

export default Drink
