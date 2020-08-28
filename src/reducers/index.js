import { combineReducers } from 'redux'
import customerReducer from './customerReducer'
import invoiceReducer from './invoiceReducer'

export default combineReducers({
  customers: customerReducer,
  invoices: invoiceReducer
})