import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Home extends Component {
  render(){
    let a = this.props.invoices.map(invoice => invoice.attributes.total)
    function reducer (total = 0, num) {return total + num; }
    console.log("we are testing a on home page", a)
    if(a.length > 0){
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
                <b>Total Earnings:</b>  ${a.reduce(reducer)}
              </div>
            </Col>
            <Col></Col>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div>
                <b>Total Customers:</b> {this.props.customers.length}<br/>
                <b>Total of Invoices:</b> {this.props.invoices.length}
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )}
    else{
      return(
        <div></div>
      )
    }
  }
}

export default Home