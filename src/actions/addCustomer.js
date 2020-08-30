export const addCustomer = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/customers', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(customer => dispatch({type: 'ADD_CUSTOMER', payload: customer}))
  }

}