import React from 'react'
import {connect} from 'react-redux'
import Invoices from '../components/Invoices'
import InputInvoice from '../components/InputInvoice'

class InvoicesContainer extends React.Component {

  render() {
    return (
      <div>
        <InputInvoice />
        <Invoices />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    invoices: state.invoices
  }
}

export default connect(mapStateToProps)(InvoicesContainer)