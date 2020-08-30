const FETCH_CUSTOMERS = "FETCH_CUSTOMERS"

export function fetchCustomers(data){

  return function(dispatch){
    
    fetch("http://localhost:3000/api/v1/customers")
      .then(res => res.json())
      .then(customersObj => {
        dispatch({type: FETCH_CUSTOMERS, payload: customersObj})
      })
    }

}