export const deleteInvoice = (invoice_id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/invoices/${invoice_id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(invoice => dispatch({type: 'DELETE_INVOICE', payload: invoice}))
  }
}