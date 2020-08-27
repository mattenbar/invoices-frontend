import React, {Component} from 'react'

class Invoice extends Component {
  render(){
    console.log(this.props)
    
    return (
      <ul key={this.props.attributes.id}>
        <li>Customer ID: {this.props.attributes.customer_id}</li>
        <li>Description: {this.props.attributes.description}</li> 
        <li>Issue Date: {this.props.attributes.issue_date}</li>
        <li>Due Date: {this.props.attributes.due_date}</li>
        <li>Item Amount/ Hours: {this.props.attributes.amount} </li>
        <li>Price/ Rate: ${this.props.attributes.price}</li>
        <li>Total: ${this.props.attributes.total}</li>
        <br></br>
      </ul>
    )
  }
}

export default Invoice