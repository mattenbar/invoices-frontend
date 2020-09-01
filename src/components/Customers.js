import React, {Component} from 'react'
import Customer from './Customer'



class Customers extends Component {

  
  render(){
    return (
       <div>
       <h1>Customers:</h1>
        {this.props.customers.map(customer => <Customer key={customer.attributes.id} attributes={customer.attributes}/>)}
       </div>
      
    )
  }
}



export default Customers;