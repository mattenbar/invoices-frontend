const ADD_INVOICES = "ADD_INVOICES"

export function addInvoices(data){

  return function(dispatch){
    
    fetch("http://localhost:3000/api/v1/invoices")
      .then(res => res.json())
      .then(invoicesObj => {
        dispatch({type: ADD_INVOICES, payload: invoicesObj})
      })
    }

}