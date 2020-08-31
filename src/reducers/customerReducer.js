export default function manageCustomers(state = [],
 action) {
  
  switch (action.type) {

    case 'FETCH_CUSTOMERS':
      console.log("WE MADE IT INTO CUSTOMERS REDUCER, YAY!", action.type, action.payload)
      return state.concat(action.payload.customer.data)

    case 'ADD_CUSTOMER':
      return state.concat(action.payload.customer.data)
  
    
    default:
      return state;
  }
}
