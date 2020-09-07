import React from 'react'
import Customers from '../components/Customers'
import InputCustomer from '../components/InputCustomer'
import Button from 'react-bootstrap/Button'

class CustomersContainer extends React.Component {
  
  state = { newCustomer: "false" };

  render() {

    return (
      <div>
        <ul>
        <h1>Customers:</h1>
        </ul>
        <ul>
          <Button
            onClick={() =>
              this.setState((prevState) => ({
                newCustomer: prevState.newCustomer === "true" ? "false" : "true"
              }))
            }
          >
            Create New Customer
          </Button>
        </ul>
        {this.state.newCustomer === "true" ? (
        <div>
          <ul><InputCustomer /></ul>
          <br></br>
          <Customers customers={this.props.customers}/>
        </div>
        ):(
          <div>
          <Customers customers={this.props.customers}/>
          </div>
        )
        }
      </div>
    )
  }
}


export default CustomersContainer