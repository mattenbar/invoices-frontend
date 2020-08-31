import React from 'react'
import {connect} from 'react-redux'
import {addCustomer} from '../actions/addCustomer'

class CustomerInput extends React.Component {

  state = {
    name: '',
    email: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addCustomer(this.state)
    this.setState({
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <div>
        Create New Customer:
        <form onSubmit={this.handleSubmit}>
          <label>Customer Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Customer Email: </label>
          <input type='email' placeholder='Email' value={this.state.email} name="email" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addCustomer})(CustomerInput)