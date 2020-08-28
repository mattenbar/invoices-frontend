import React, {Component} from 'react'

class Invoice extends Component {

  
  render(){
    let c = this.props.customers.find(customer => parseInt(customer.id) === this.props.invoice.customer_id)
    if (c){
      return (
        <ul >
          <li>Customer ID: {c.attributes.name}</li>
          <li>Description: {this.props.invoice.description}</li> 
          <li>Issue Date: {this.props.invoice.issue_date}</li>
          <li>Due Date: {this.props.invoice.due_date}</li>
          <li>Item Amount/ Hours: {this.props.invoice.amount} </li>
          <li>Price/ Rate: ${this.props.invoice.price}</li>
          <li>Total: ${this.props.invoice.total}</li>
          <br></br>
        </ul>
      )
    } else {
      return <div></div>
    }
  }
}

export default Invoice