import React, {Component} from 'react'
import Invoice from './Invoice'
import {Link} from "react-router-dom"



class Invoices extends Component {

 
  
  render(){
    let c
    let links
    let customers
    if(this.props.customers.length > 0 ) {
      links = this.props.invoices.map(invoice => {
      customers = this.props.customers.map(customer => customer.attributes)
      c = customers.find(customer => customer.id === invoice.attributes.customer_id)
      return <Link key={invoice.id} to={`/invoices/${invoice.id}`}>Invoice #{invoice.id} - {c.name} - {invoice.attributes.description}<br/></Link> 
      }
      )
    return (
       <div>
       <ul>
        {links}
        </ul>
       </div>
      
    )}
    else{
      return (<div></div>)
    }
  }
}

export default (Invoices);