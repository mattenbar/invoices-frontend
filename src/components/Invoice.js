import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteInvoice} from '../actions/deleteInvoice'
import moment from 'moment';
import Button from 'react-bootstrap/Button'

class Invoice extends Component {

  handleDelete = (invoice_id) => {
    this.props.deleteInvoice(invoice_id)
  }

  
  render(){
    let c = this.props.customers.find(customer => parseInt(customer.id) === this.props.invoice.customer_id)
    if (c){
    
      return (
        <ul >
          <b>Customer:</b> {c.attributes.name}<br/>
          <b>Description:</b> {this.props.invoice.description} <br/>
          <b>Issue Date:</b> {moment(this.props.invoice.issue_date).format("MMMM Do, YYYY")}<br/>
          <b>Due Date:</b> {moment(this.props.invoice.due_date).format("MMMM Do, YYYY")}<br/>
          <b>Item Amount/ Hours:</b> {this.props.invoice.amount} <br/>
          <b>Price/ Rate:</b> ${this.props.invoice.price}<br/>
          <b>Total:</b> ${this.props.invoice.total}<br/>
          <b>Paid:</b> {this.props.invoice.paid.toString()}<br/>
          <br/>
          <Button onClick={() => this.handleDelete(this.props.invoice.id)}>Delete</Button>
          <br/><br/><br/>
        </ul>
      )
    } else {
      return <div></div>
    }
  }
}

export default connect(null, {deleteInvoice}) (Invoice)