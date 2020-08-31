import React from 'react'
import {connect} from 'react-redux'
import {addInvoice} from '../actions/addInvoice'


class InvoiceInput extends React.Component {

  state = {
    description: '',
    issue_date: '',
    due_date: ''
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addInvoice(this.state)
    this.setState({
      description: '',
      issue_date: '',
      due_date: ''
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Create New Invoice:
        <form onSubmit={this.handleSubmit}>
          <label>Description: </label>
          <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <label>Issue Date: </label>
          <input type='date'  value={this.state.issue_date} name="issue_date" onChange={this.handleChange}/><br/>
          <label>Due Date: </label>
          <input type='date' value={this.state.due_date} name="due_date" onChange={this.handleChange}/><br/>
          
          <input type="submit"/>
        </form>
        <br></br>
      </div>
    )
  }
}

function mSTP(state){
  return {
    invoices: state.invoices,
    customers: state.customers
  }
}


export default connect(mSTP, {addInvoice})(InvoiceInput)