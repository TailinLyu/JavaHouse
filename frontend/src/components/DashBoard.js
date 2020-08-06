import React, {Component} from 'react'
import DrinkList from './DrinkList'
import AddDrink from './AddDrink'
class DashBoard extends Component{
    render(){
        return(
            <div>
                <DrinkList drinks={this.props.drinks} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete}/>
                <AddDrink handleOnSubmit={this.props.handleOnSubmit}/>
            </div>
        )
    }
}

export default DashBoard