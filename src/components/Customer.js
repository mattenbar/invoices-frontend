import React, {Component} from 'react'
import Invoice from './Invoice'
import {Link} from "react-router-dom"

class Customer extends Component {
  render(){
    let customerID = parseInt(this.props.match.params.id)
    let c = this.props.customers.find(customer => parseInt(customer.id) === parseInt(customerID))
    // eslint-disable-next-line
    let customerInvoices = this.props.invoices.map(invoice => {if(invoice.attributes.customer_id === customerID){ return invoice.attributes}})
    let filteredInvoices = customerInvoices.filter(function(x){
      return x !== undefined
    })
    
    if (c && filteredInvoices.length > 0 ){
    return (
      <div>
      <br/>
        <ul>
        <h4><b>Customer Name:</b> {c.attributes.name}</h4>
        <h4><b>Customer Email:</b> {c.attributes.email}</h4>
        </ul>
        <div>
          <ul><h5><b>Customer Invoices:</b></h5></ul>
          {filteredInvoices.map(invoice => 
            <Invoice key={invoice.id} invoice={invoice} 
            customers={
              this.props.customers
            }/>).reverse()}
        </div>
      </div>
    )}
    else if(c && filteredInvoices.length === 0) {
      return (
        <div>
        <br/>
          <ul>
          <h4><b>Customer Name:</b> {c.attributes.name}</h4>
          <h4><b>Customer Email:</b> {c.attributes.email}</h4>
          </ul>
          <div>
            <ul><h5><b>Customer Invoices:</b></h5>
              <b>Customer has no invoices</b>
              <br></br>
              <Link  to={`/invoices/new`}>Create New Invoice<br/> </Link>
            </ul>
          </div>
        </div>
      )
    }
    else{
      return (<div></div>)
    }
  }
}

export default Customer