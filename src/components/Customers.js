import React, {Component} from 'react'
import {Link} from "react-router-dom"



class Customers extends Component {

  
  render(){
    return (
       <div>
        <ul>
        {this.props.customers.map(customer => 
          <Link key={customer.id} to={`/customers/${customer.id}`}>{customer.attributes.name}<br/> </Link>
        )
        }
        </ul>
       </div>
      
    )
  }
}



export default Customers;