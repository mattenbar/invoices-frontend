import React, {Component} from 'react'
import {Link} from "react-router-dom"



class Customers extends Component {

  
  render(){

    function capitalize(string){
      let capitalizeWord
      let firstLetter = string[0].toUpperCase()
      let restOfWord = string.slice(1)
      return capitalizeWord = firstLetter + restOfWord
    }

    let customers
    if (this.props.customers.length > 0){
      
      customers = this.props.customers.map(customer => 
        customer.attributes
      )
      customers.sort(function(a,b){
          let nameA = capitalize(a.name)
          let nameB = capitalize(b.name)
          if (nameA < nameB){
            return -1
          }
          if (nameA > nameB){
            return 1
          }
        })
      }
      
    if (this.props.customers.length > 0){
    return (
       <div>
        <ul>
        {customers.map(customer => 
          <Link key={customer.id} to={`/customers/${customer.id}`}>{capitalize(customer.name)}<br/> </Link>
        )
        }
        </ul>
       </div>
      
    )}
    else{
      return( <div></div>)
    }
  }
}



export default Customers;