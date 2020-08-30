import React, {Component} from 'react'
import Customer from './Customer'
import {fetchCustomers} from '../actions/fetchCustomers'
import { connect } from 'react-redux'


class Customers extends Component {

  componentDidMount(){
    this.props.dispatchFetchCustomers()
  }
  
  render(){
    return (
       <div>
        {this.props.customers.map(customer => <Customer key={customer.attributes.id} attributes={customer.attributes}/>)}
       </div>
      
    )
  }
}

function mSTP(state){
  return {
    customers: state.customers
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchCustomers: (customers) => dispatch(fetchCustomers(customers)),
  }
}

export default connect(mSTP, mDTP)(Customers);