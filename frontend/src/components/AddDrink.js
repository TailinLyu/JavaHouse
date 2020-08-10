import React, { Component } from "react"

class AddDrink extends Component {

	state = {
		name: '',
		recipe: ''
	}

	handleOnChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleOnSubmit = (event) => {
		this.props.handleOnSubmit(this.state)
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
						<label>Drink Name</label>
						<input
							type="text"
							name="name"
							placeholder="Drink Name"
							onChange={this.handleOnChange}
						/>
						<label>Recipe</label>
						<input
							type="text"
							name="recipe"
                            placeholder="Please seperate ingredients by comma"
                            onChange={this.handleOnChange}
						/>
						<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}

export default AddDrink
