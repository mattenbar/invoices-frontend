import React, {Component} from 'react'

class Customer extends Component {
  render(){
    
    return (
      <ul key={this.props.attributes.id}>
        <li>Customer Name: {this.props.attributes.name}</li>
        <li>Customer Email: {this.props.attributes.email}</li> 
        <br></br>
      </ul>
    )
  }
}

export default Customer