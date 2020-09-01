export default function manageInvoices(state = [], action) {
  
  switch (action.type) {

    case 'FETCH_INVOICES':
      console.log("WE MADE IT INTO THE INVOICE REDUCER, YAY!", action.type, action.payload)
      return state.concat(action.payload.invoice.data)

    case 'ADD_INVOICE':
      return state.concat(action.payload.invoice.data)

    case 'DELETE_INVOICE':
      return state = action.payload.invoice.data

    case 'MARK_AS_PAID':
      return state = action.payload.invoice.data
      
      
    
    default:
      return state;
  }
}
