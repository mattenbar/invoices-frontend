import React from 'react'
import Invoices from '../components/Invoices'
import InputInvoice from '../components/InputInvoice'


class InvoicesContainer extends React.Component {

  state = { newInvoice: "false" };

  render() {
    return (
      <div>
        <h1>Invoices:</h1>
        <ul><button
          onClick={() =>
            this.setState((prevState) => ({
              newInvoice: prevState.newInvoice === "true" ? "false" : "true"
            }))
          }
        >
          Create New Invoice
        </button></ul>
        {this.state.newInvoice === "true" ? (
        <div>
          <ul><InputInvoice /></ul>
          <Invoices invoices={this.props.invoices} customers={this.props.customers}/>
        </div>
        ) : (
          <div>
            <br/>
            <Invoices invoices={this.props.invoices} customers={this.props.customers}/>
          </div>
        )
        }
      </div>
    )
  }
}


export default InvoicesContainer