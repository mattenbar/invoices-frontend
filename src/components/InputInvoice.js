import React from 'react'
import {connect} from 'react-redux'
import {addInvoice} from '../actions/addInvoice'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="customer_selector">
            <Form.Label>Choose Customer:</Form.Label>
            <Form.Control as="select" value={this.state.customer_id} name="customer_id" onChange={this.handleChange}>
              <option>Choose Customer...</option>
              {c}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="issue_date">
            <Form.Label>Issue Date: </Form.Label>
            <Form.Control type='date'  value={this.state.issue_date} name="issue_date" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="issue_date">
          <Form.Label>Due Date: </Form.Label>
          <Form.Control type='date' value={this.state.due_date} name="due_date" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="amount">
          <Form.Label>Item Amount / Hours: </Form.Label>
          <Form.Control type="integer" value={this.state.amount} name="amount" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="price">
          <Form.Label>Item Price / Rate: </Form.Label>
          <Form.Control type="float" value={this.state.price} name="price" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="total">
          <Form.Label>Total: </Form.Label>
          <Form.Control type="float" value={this.state.price * this.state.amount} name="total" onChange={this.handleChange} readOnly/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
         </Button>
        </Form>
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