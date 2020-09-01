import React, {Component} from 'react'
import Invoice from './Invoice'



class Invoices extends Component {

 
  
  render(){
    return (
       <div>
        {this.props.invoices.map(invoice => 
          <Invoice key={invoice.attributes.id} invoice={invoice.attributes} 
            customers={
              this.props.customers
            }/>).reverse()}
       </div>
      
    )
  }
}

export default (Invoices);