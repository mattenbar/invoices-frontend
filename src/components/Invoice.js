import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteInvoice} from '../actions/deleteInvoice'
import {markAsPaid} from '../actions/markAsPaid'
import moment from 'moment';
import Button from 'react-bootstrap/Button'

class Invoice extends Component {

  handleDelete = (invoice_id) => {
    this.props.dispatchDeleteInvoice(invoice_id)
  }

  handleMarkAsPaid = (invoice) => {
    if (!invoice.paid){
      let newInvoice = {...invoice, paid: true}
      this.props.dispatchMarkAsPaid(newInvoice)}
    else{
      let newInvoice = {...invoice, paid: false}
      this.props.dispatchMarkAsPaid(newInvoice)
    }
  }

  
  render(){
    let invoiceID = parseInt(this.props.match.params.id)
    let invoice
    let c
    if (invoiceID){
      invoice = this.props.invoices.find(invoice => parseInt(invoice.id) === parseInt(invoiceID))
    }
    
    
    if (invoice && this.props.customers.length > 0){
      c = this.props.customers.find(customer => parseInt(customer.id) === parseInt(invoice.attributes.customer_id))
      if (c){
      return (
        <ul >
          <b>Invoice Number</b> {invoice.attributes.id}<br/>
          <b>Customer:</b> {c.attributes.name}<br/>
          <b>Description:</b> {invoice.attributes.description} <br/>
          <b>Issue Date:</b> {moment(invoice.attributes.issue_date).format("MMMM Do, YYYY")}<br/>
          <b>Due Date:</b> {moment(invoice.attributes.due_date).format("MMMM Do, YYYY")}<br/>
          <b>Item Amount/ Hours:</b> {invoice.attributes.amount} <br/>
          <b>Price/ Rate:</b> ${invoice.attributes.price}<br/>
          <b>Total:</b> ${invoice.attributes.total}<br/>
          <b>Paid:</b> {invoice.attributes.paid.toString()}<br/>
          <br/>
          <Button onClick={() => this.handleMarkAsPaid(this.props.invoice)}>Mark As {invoice.attributes.paid === true ? "Unpaid" : "Paid"}</Button><br/><br/>
          <Button onClick={() => this.handleDelete(this.props.invoice.id)}>Delete</Button>
          
          <br/><br/><br/>
        </ul>
      )}
    } else {
      return <div></div>
    }
  }
}

function mDTP(dispatch){
  return {
    dispatchMarkAsPaid: (invoice) => dispatch(markAsPaid(invoice)),
    dispatchDeleteInvoice: (invoice_id) => dispatch(deleteInvoice(invoice_id)),
  }
}

export default connect(null, mDTP) (Invoice)