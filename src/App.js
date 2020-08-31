import React from 'react';
import InvoicesContainer from './containers/InvoicesContainer'
import CustomersContainer from './containers/CustomersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  


  render(){
    return (
      <div className="App">
        <ul>
          <h1>Invoices:</h1>
          <InvoicesContainer />
          <h1>Customers:</h1>
          <CustomersContainer />
        </ul>
      </div>
    );
  }
}

export default App;
