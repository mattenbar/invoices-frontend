import React from 'react'
import {connect} from 'react-redux'
import Customers from '../components/Customers'
import InputCustomer from '../components/InputCustomer'

class CustomersContainer extends React.Component {

  render() {
    return (
      <div>
        <Customers />
        <br></br>
        <InputCustomer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers
  }
}

export default connect(mapStateToProps)(CustomersContainer)