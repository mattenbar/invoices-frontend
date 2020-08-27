export default function manageInvoices(state = {
  invoices: [],
}, action) {
  
  switch (action.type) {

    case 'ADD_INVOICES':
      console.log("WE MADE IT INTO THE REDUCER, YAY!", action.type, action.payload.invoice.data)
      return {invoices: action.payload.invoice.data}

    
    default:
      return state;
  }
}
