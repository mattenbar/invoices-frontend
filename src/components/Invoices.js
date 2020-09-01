import React, {Component} from 'react'
import Invoice from './Invoice'
import {Link} from "react-router-dom"



class Invoices extends Component {

 
  
  render(){
    return (
       <div>
       <ul>
        {this.props.invoices.map(invoice => 
          <Link key={invoice.id} to={`/invoices/${invoice.id}`}>Invoice #{invoice.id} - {invoice.attributes.customer_id}<br/></Link> 
        )}
        </ul>
       </div>
      
    )
  }
}

export default (Invoices);