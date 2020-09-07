import React from 'react'
import {connect} from 'react-redux'
import {addInvoice} from '../actions/addInvoice'
import {addCustomer} from '../actions/addCustomer'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import InputCustomer from './InputCustomer'

import Container from 'react-bootstrap/Container'




class InvoiceInput extends React.Component {

  state = {
    invoice: {
      description: '',
      issue_date: '',
      due_date: '',
      amount: 0,
      price: 0.00,
      total: 0.00,
      customer_id: 0
    },
    customer:{
      name: '',
      email: ''}
    }
  
  
  handleInvoiceChange = (event) => {
    let invoice = {...this.state.invoice}
    let currentState = invoice
    let {name, value} = event.target
    currentState[name] = value
    this.setState({
      invoice: currentState
    })
  }

  handleInvoiceSubmit = (event) => {
    event.preventDefault()
    this.props.dispatchAddInvoice(this.state.invoice)
    this.setState({
      invoice: {
        description: '',
        issue_date: '',
        due_date: '',
        amount: 0,
        price: 0.00,
        total: 0.00,
        customer_id: 0
      },
      customer:{
        name: '',
        email: ''
      }
    })
  }
  

  handleCustomerSubmit = (e) => {
    e.preventDefault()
    this.props.dispatchAddCustomer(this.state.customer)
    this.setState({
      invoice: {
        description: '',
        issue_date: '',
        due_date: '',
        amount: 0,
        price: 0.00,
        total: 0.00,
        customer_id: 0
      },
      customer:{
        name: '',
        email: ''
      }
    })
  }

  render(){
    let c = this.props.customers.map(customer => <option key={customer.attributes.id} value={customer.attributes.id} name="customer_id" onChange={this.handleChange}> {customer.attributes.id} - {customer.attributes.name}</option>)
    let popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          <InputCustomer />
        </Popover.Content>
      </Popover>
    )


    if (c){
      return (
        <Container>
          <div>
            <h5>Create New Invoice:</h5>
            <Form >
              <Form.Group controlId="customer_selector">
                <Form.Label>Choose Customer or   &nbsp;
                  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="primary"> create new customer</Button>
                  </OverlayTrigger>
                 </Form.Label>
                <Form.Control as="select" value={this.state.invoice.customer_id} name="customer_id" onChange={this.handleInvoiceChange}>
                  <option>Choose Customer...</option>
                  {c}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description: </Form.Label>
                <Form.Control type='text' placeholder='Description' value={this.state.invoice.description} name="description" onChange={this.handleInvoiceChange}/>
              </Form.Group>

              <Form.Group controlId="issue_date">
                <Form.Label>Issue Date: </Form.Label>
                <Form.Control type='date'  value={this.state.invoice.issue_date} name="issue_date" onChange={this.handleInvoiceChange}/>
              </Form.Group>

              <Form.Group controlId="issue_date">
                <Form.Label>Due Date: </Form.Label>
                <Form.Control type='date' value={this.state.invoice.due_date} name="due_date" onChange={this.handleInvoiceChange}/>
              </Form.Group>

              <Form.Group controlId="amount">
                <Form.Label>Item Amount / Hours: </Form.Label>
                <Form.Control type="integer" value={this.state.invoice.amount} name="amount" onChange={this.handleInvoiceChange}/>
              </Form.Group>

              <Form.Group controlId="price">
                <Form.Label>Item Price / Rate: </Form.Label>
                <Form.Control type="float" value={this.state.invoice.price} name="price" onChange={this.handleInvoiceChange}/>
              </Form.Group>

              <Form.Group controlId="total">
                <Form.Label>Total: </Form.Label>
                <Form.Control type="float" value={this.state.invoice.price * this.state.invoice.amount} name="total" onChange={this.handleInvoiceChange} readOnly/>
              </Form.Group>

              <Button onClick={this.handleInvoiceSubmit} variant="primary" type="submit">
                Submit
              </Button>
                
            </Form><br></br>
          </div>
        </Container>
      )
    } else {
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

function mDTP(dispatch){
  return {
    dispatchAddInvoice: (invoice) => dispatch(addInvoice(invoice)),
    dispatchAddCustomer: (customer) => dispatch(addCustomer(customer)),
  }
}


export default connect(mSTP, mDTP)(InvoiceInput)