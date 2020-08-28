import React, {Component} from 'react'
import Customer from './Customer'
import {addCustomers} from '../actions/addCustomers'
import { connect } from 'react-redux'


class Customers extends Component {

  componentDidMount(){
    this.props.dispatchAddCustomers()
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
    dispatchAddCustomers: (customers) => dispatch(addCustomers(customers)),
  }
}

export default connect(mSTP, mDTP)(Customers);