import { browserHistory } from 'react-router';

export const deleteInvoice = (invoiceId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/invoices/${invoiceId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(invoice => dispatch({type: 'DELETE_INVOICE', payload: invoice}))
  }
}