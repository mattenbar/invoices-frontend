import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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

export default Home