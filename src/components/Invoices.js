import React, {Component} from 'react'
import Invoice from './Invoice'
import {addInvoices} from '../actions/addInvoice'
import { connect } from 'react-redux'


class Invoices extends Component {

  componentDidMount(){
    this.props.dispatchAddInvoices()
  }
  
  render(){
    return (
       <div>
        {this.props.invoices.map(invoice => <Invoice key={invoice.attributes.id} invoice={invoice.attributes} 
        customers={
          this.props.customers
        }

          />)}
       </div>
      
    )
  }
}

function mSTP(state){
  return {
    invoices: state.invoices,
    customers: state.customers
  }
}

function mDTP(dispatch){
  return {
    dispatchAddInvoices: (invoices) => dispatch(addInvoices(invoices)),
  }
}

export default connect(mSTP, mDTP)(Invoices);