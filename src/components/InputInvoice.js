import React from 'react'
import {connect} from 'react-redux'
import {addInvoice} from '../actions/addInvoice'

import Form from 'react-bootstrap/Form'



class InvoiceInput extends React.Component {

  state = {
    description: '',
    issue_date: '',
    due_date: '',
    amount: 0,
    price: 0.00,
    total: 0.00,
    customer_id: 0
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addInvoice(this.state)
    this.setState({
      description: '',
      issue_date: '',
      due_date: '',
      amount: 0,
      price: 0.00,
      customer_id: 0
    })
  }

  render() {
    
      let c = this.props.customers.map(customer => <option key={customer.attributes.id} value={customer.attributes.id} name="customer_id" onChange={this.handleChange}> {customer.attributes.id} - {customer.attributes.name}</option>)
      if (c){
      return (
      <div>
        <h5>Create New Invoice:</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Choose Customer:</label>
          <Form.Control as="select" value={this.state.customer_id} name="customer_id" onChange={this.handleChange}>
            {c}
          </Form.Control>
          <br/>
          <label>Description: </label>
          <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <label>Issue Date: </label>
          <input type='date'  value={this.state.issue_date} name="issue_date" onChange={this.handleChange}/><br/>
          <label>Due Date: </label>
          <input type='date' value={this.state.due_date} name="due_date" onChange={this.handleChange}/><br/>
          <label>Item Amount / Hours: </label>
          <input type="integer" value={this.state.amount} name="amount" onChange={this.handleChange}/><br/>
          <label>Item Price / Rate: </label>
          <input type="float" value={this.state.price} name="price" onChange={this.handleChange}/><br/>
          <label>Total: </label>
          <input type="float" value={this.state.price * this.state.amount} name="total" onChange={this.handleChange}/><br/>
          <br/>
          
          <input type="submit"/>
        </form>
        <br></br>
      </div>
    )
  }
  else {
    return <div></div>
  }
  }
}

function mSTP(state){
  return {
    invoices: state.invoices,
    customers: state.customers
  }
}


export default connect(mSTP, {addInvoice})(InvoiceInput)