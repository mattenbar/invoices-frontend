import React, {Component} from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Home extends Component {
  render(){
    let earned = this.props.invoices.map(invoice => {
      if(invoice.attributes.paid){
        return invoice.attributes.total}
      else{
        return 0
      }
      })

    let owed = this.props.invoices.map(invoice => {
      if(!invoice.attributes.paid){
        return invoice.attributes.total}
      else{
        return 0
      }
    })
    // eslint-disable-next-line
    let unpaidInvoices = this.props.invoices.map(invoice =>{
        let c
        let customers
      if(!invoice.attributes.paid){

          if(this.props.customers.length > 0){
          customers = this.props.customers.map(customer => customer.attributes)
          c = customers.find(customer => customer.id === invoice.attributes.customer_id)
          return <Link key={invoice.id} to={`/invoices/${invoice.id}`}>Invoice #{invoice.id} - {c.name} - {invoice.attributes.description}<br/></Link> }
    }})

    function checkForUnpaidInvoices(invoicesArray){
      
      let filtered = invoicesArray.filter(function (el) {
        return el != null;
      });
      if(filtered.length > 0){
        return invoicesArray
      }
      else{
        return (<b>All invoices are paid</b>)
      }
    }
    
    function reducer (total = 0, num) {return total + num; }


    console.log("we are testing a on home page", earned)
    
    if(earned.length > 0){
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Container>
        <br></br>
          <Row>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h2 >Invoice Tracker</h2>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div>
                <b>Total Earnings:</b>  ${earned.reduce(reducer).toFixed(2)}
                <br/>
                <b>Incoming Payments:</b>  ${owed.reduce(reducer).toFixed(2)}
              </div>
            </Col>
            <Col></Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div>
                <b>Total Customers:</b> {this.props.customers.length}<br/>
                <b>Total Number of Invoices:</b> {this.props.invoices.length}
              </div>
            </Col>
          </Row>
          <br></br>
          <div>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    View Unpaid Invoices
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{checkForUnpaidInvoices(unpaidInvoices)}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </Container>
        

      </div>
    )}
    else{
      return(
        <div>
          <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <br/><br/><br/>
        <Container>
          <Row>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h2 >Invoice Tracker</h2>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div>
                <b>Total Earnings:</b>  $0.00
              </div>
            </Col>
            <Col></Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div>
                <b>Total Customers:</b> {this.props.customers.length}<br/>
                <b>Total Number of Invoices:</b> {this.props.invoices.length}
              </div>
              
            </Col>
            
          </Row>
          

          


        </Container>
      </div>
      </div>
      )
    }
  }
}

function mSTP(state){
  return {
    invoices: state.invoices,
    customers: state.customers
  }
}

export default connect(mSTP)(Home)