import React from 'react'
import {connect} from 'react-redux'
import Customers from '../components/Customers'

class CustomersContainer extends React.Component {

  render() {
    return (
      <div>
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