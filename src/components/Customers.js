import React, {Component} from 'react'
import Customer from './Customer'



class Customers extends Component {

  
  render(){
    return (
       <div>
        {this.props.customers.map(customer => <Customer key={customer.attributes.id} attributes={customer.attributes}/>)}
       </div>
      
    )
  }
}



export default Customers;