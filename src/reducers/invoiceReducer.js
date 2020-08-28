export default function manageInvoices(state = [], action) {
  
  switch (action.type) {

    case 'ADD_INVOICES':
      console.log("WE MADE IT INTO THE INVOICE REDUCER, YAY!", action.type, action.payload)
      return state.concat(action.payload.invoice.data)

    
    default:
      return state;
  }
}
