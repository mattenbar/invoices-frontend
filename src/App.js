import React from 'react';
import InvoicesContainer from './containers/InvoicesContainer'
import CustomersContainer from './containers/CustomersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  


  render(){
    return (
      <div className="App">
        <ul>
          Invoices:
          <InvoicesContainer />
          Customers:
          <CustomersContainer />
        </ul>
      </div>
    );
  }
}

export default App;
