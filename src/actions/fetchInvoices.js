const FETCH_INVOICES = "FETCH_INVOICES"

export function fetchInvoices(data){

  return function(dispatch){
    
    fetch("http://localhost:3000/api/v1/invoices")
      .then(res => res.json())
      .then(invoicesObj => {
        dispatch({type: FETCH_INVOICES, payload: invoicesObj})
      })
    }

}