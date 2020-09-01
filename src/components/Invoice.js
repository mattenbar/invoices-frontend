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
    let invoiceID
    if(this.props.match){
    invoiceID = parseInt(this.props.match.params.id)
    }else{
      invoiceID = this.props.invoice.id
    }
    let invoice
    let c
    if (invoiceID){
      if(this.props.invoices && this.props.invoices.length > 0){
        invoice = this.props.invoices.find(invoice => parseInt(invoice.id) === parseInt(invoiceID))
        if(invoice.attributes){
          invoice = invoice.attributes
        }
      }else{
        invoice = this.props.invoice
      } 
    }
    
    
    if (invoice && this.props.customers.length > 0){
      c = this.props.customers.find(customer => parseInt(customer.id) === parseInt(invoice.customer_id))
      if (c){
      return (
        <ul >
          <b>Invoice Number</b> {invoice.id}<br/>
          <b>Customer:</b> {c.attributes.name}<br/>
          <b>Description:</b> {invoice.description} <br/>
          <b>Issue Date:</b> {moment(invoice.issue_date).format("MMMM Do, YYYY")}<br/>
          <b>Due Date:</b> {moment(invoice.due_date).format("MMMM Do, YYYY")}<br/>
          <b>Item Amount/ Hours:</b> {invoice.amount} <br/>
          <b>Price/ Rate:</b> ${invoice.price}<br/>
          <b>Total:</b> ${invoice.total}<br/>
          <b>Paid:</b> {invoice.paid.toString()}<br/>
          <br/>
          <Button onClick={() => this.handleMarkAsPaid(invoice)}>Mark As {invoice.paid === true ? "Unpaid" : "Paid"}</Button><br/><br/>
          <Button onClick={() => this.handleDelete(invoice.id)}>Delete</Button>
          
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