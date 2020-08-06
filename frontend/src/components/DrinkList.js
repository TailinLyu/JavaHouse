import React, { Component } from "react"
import Drink from "./Drink"
class DrinkList extends Component {
	render() {
		const drinks = this.props.drinks
		return (
			<div>
				{drinks.map((drink) => (
					<Drink
						key={drink.id}
						drink={drink}
						handleEdit={this.props.handleEdit}
						handleDelete={this.props.handleDelete}
					/>
				))}
			</div>
		)
	}
}

export default DrinkList
