import React from 'react'
import {connect} from 'react-redux'
import Customers from '../components/Customers'
import InputCustomer from '../components/InputCustomer'

class CustomersContainer extends React.Component {

  render() {
    return (
      <div>
        <InputCustomer />
        <Customers />
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