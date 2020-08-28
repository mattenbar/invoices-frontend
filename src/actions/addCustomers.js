const ADD_CUSTOMERS = "ADD_CUSTOMERS"

export function addCustomers(data){

  return function(dispatch){
    
    fetch("http://localhost:3000/api/v1/customers")
      .then(res => res.json())
      .then(customersObj => {
        dispatch({type: ADD_CUSTOMERS, payload: customersObj})
      })
    }

}