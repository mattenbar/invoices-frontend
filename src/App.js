import React from 'react';
import InvoicesContainer from './containers/InvoicesContainer'
import CustomersContainer from './containers/CustomersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component{
  


  render(){
    return (
      <div className="App">
        <h1>INVOICE TRACKER</h1>
        <Switch>
        <Route exact path="/invoices" render={() =><InvoicesContainer />}/>
        <Route exact path="/customers" render={() =><CustomersContainer />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
