import React, {Component} from 'react'
import Invoice from './Invoice'
import {addInvoices} from '../actions/addInvoice'
import { connect } from 'react-redux'


class Invoices extends Component {

  componentDidMount(){
    this.props.dispatchAddInvoices()
  }
  
  render(){
    console.log(this.props.invoices)
    return (
       <div>
        {this.props.invoices.map(invoice => <Invoice key={invoice.attributes.id} attributes={invoice.attributes}/>)}
       </div>
      
    )
  }
}

function mSTP(state){
  return {
    invoices: state.invoices
  }
}

function mDTP(dispatch){
  return {
    dispatchAddInvoices: (invoices) => dispatch(addInvoices(invoices)),
  }
}

export default connect(mSTP, mDTP)(Invoices);