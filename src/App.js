import React from 'react';
import InvoicesContainer from './containers/InvoicesContainer'
import CustomersContainer from './containers/CustomersContainer';
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import {fetchInvoices} from './actions/fetchInvoices'
import {fetchCustomers} from './actions/fetchCustomers'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import Customer from './components/Customer'
import Invoice from './components/Invoice'

class App extends React.Component{

  componentDidMount(){
    this.props.dispatchFetchInvoices()
    this.props.dispatchFetchCustomers()
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
        <Route exact path ="/" render={()=> <Home invoices={this.props.invoices} customers={this.props.customers}/>}/>
        <Route exact path="/invoices" render={() =><InvoicesContainer invoices={this.props.invoices} customers={this.props.customers}/>}/>
        <Route exact path="/customers" render={() =><CustomersContainer customers={this.props.customers}/>}/>
        <Route exact path="/customers/:id" render={(routerProps) => <Customer {...routerProps} customers={this.props.customers} invoices={this.props.invoices}/>}/>
        <Route exact path="/invoices/:id" render={(routerProps) => <Invoice {...routerProps} customers={this.props.customers} invoices={this.props.invoices}/>}/>
        </Switch>
      </div>
    );
  }
}

function mSTP(state){
  return {
    invoices: state.invoices,
    customers: state.customers
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchInvoices: (invoices) => dispatch(fetchInvoices(invoices)),
    dispatchFetchCustomers: (customers) => dispatch(fetchCustomers(customers)),
  }
}

export default connect(mSTP, mDTP)(App);

