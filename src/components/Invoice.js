import React, {Component} from 'react'

class Invoice extends Component {

  
  render(){
    let c = this.props.customers.find(customer => parseInt(customer.id) === this.props.invoices.customer_id)
    if (c){
      return (
        <ul >
          <li>Customer ID: {c.attributes.name}</li>
          <li>Description: {this.props.invoices.description}</li> 
          <li>Issue Date: {this.props.invoices.issue_date}</li>
          <li>Due Date: {this.props.invoices.due_date}</li>
          <li>Item Amount/ Hours: {this.props.invoices.amount} </li>
          <li>Price/ Rate: ${this.props.invoices.price}</li>
          <li>Total: ${this.props.invoices.total}</li>
          <br></br>
        </ul>
      )
    } else {
      return <div></div>
    }
  }
}

export default Invoice