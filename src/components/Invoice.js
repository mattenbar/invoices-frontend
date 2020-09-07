import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteInvoice} from '../actions/deleteInvoice'
import {markAsPaid} from '../actions/markAsPaid'
import moment from 'moment';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import{ init } from 'emailjs-com';
init("user_pbewGaer9GHlj1ur1WGW3");


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

        let templateParams = {
          name: c.attributes.name,
          customer_email: c.attributes.email,
          invoice_number: invoice.id,
          description: invoice.description,
          issue_date: moment(invoice.issue_date).format("MMMM Do, YYYY"),
          due_date: moment(invoice.due_date).format("MMMM Do, YYYY"),
          amount: invoice.amount,
          price: invoice.price,
          total: invoice.total
        }

        console.log(templateParams);

      return (
        <ul >
          <br></br>
          <Container>
          <Card border="dark" >
          <Card.Header>Invoice Number: {invoice.id}</Card.Header>
          <Card.Body>
          <Col >
            <Row xs={4} md={3} lg={8}>
              <Col>
                <b>Customer:</b> {c.attributes.name}<br/>
                <b>Description:</b> {invoice.description} <br/>
                <b>Issue Date:</b> {moment(invoice.issue_date).format("MMMM Do, YYYY")}<br/>
                <b>Due Date:</b> {moment(invoice.due_date).format("MMMM Do, YYYY")}<br/>
                <br/>
                
              </Col>
              <Col>
                <b>Item Amount/ Hours:</b> {invoice.amount} <br/>
                <b>Price/ Rate:</b> ${invoice.price}<br/>
                <b>Total:</b> ${invoice.total}<br/>
                <b>Paid:</b> {invoice.paid.toString()}<br/><br/>
                
              </Col>
            </Row>
          </Col>
          <Button variant="dark" onClick={() => window.emailjs.send(
                  'service_48zb246', 'template_e56p9sc', templateParams)
                  .then(res => {alert("Email succesfully sent")})
                  .catch(err => {alert("There was an error sending your email")})
                  }>Email Invoice</Button>
                <b>    </b>
                <Button variant="dark" onClick={() => this.handleMarkAsPaid(invoice)}>Mark As {invoice.paid === true ? "Unpaid" : "Paid"}</Button>
                <b>    </b>
                <Button variant="danger" onClick={() => this.handleDelete(invoice.id)}>Delete</Button>
          </Card.Body>
          </Card>
          </Container>
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