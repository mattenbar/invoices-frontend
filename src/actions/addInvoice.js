export const addInvoice = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/invoices', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(invoice => dispatch({type: 'ADD_INVOICE', payload: invoice}))
  }

}