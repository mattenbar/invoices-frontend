import React from 'react'
import {connect} from 'react-redux'
import {addCustomer} from '../actions/addCustomer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


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
        <h4>Create New Customer:</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter customer name" value={this.state.name} name="name" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="email">
          <Form.Label>Customer Email</Form.Label>
          <Form.Control type="email" placeholder="Enter customer email" value={this.state.email} name="email" onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}



export default connect(null, {addCustomer})(CustomerInput)