export const markAsPaid = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/invoices/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(invoice => dispatch({type: 'MARK_AS_PAID', payload: invoice}))
  }

}