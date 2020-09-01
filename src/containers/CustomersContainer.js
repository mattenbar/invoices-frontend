import React from 'react'
import Customers from '../components/Customers'
import InputCustomer from '../components/InputCustomer'

class CustomersContainer extends React.Component {

  render() {

    return (
      <div>
        <h1>Customers:</h1><br/>
        <InputCustomer />
        <br></br>
        <Customers customers={this.props.customers}/>
      </div>
    )
  }
}


export default CustomersContainer