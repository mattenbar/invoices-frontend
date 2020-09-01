import React from 'react'
import Invoices from '../components/Invoices'
import InputInvoice from '../components/InputInvoice'


class InvoicesContainer extends React.Component {

  render() {
    return (
      <div>
        <InputInvoice />
        <Invoices invoices={this.props.invoices} customers={this.props.customers} />
      </div>
    )
  }
}


export default InvoicesContainer