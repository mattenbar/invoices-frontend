import React from 'react';
import InvoicesContainer from './containers/InvoicesContainer'
import CustomersContainer from './containers/CustomersContainer';

class App extends React.Component{
  


  render(){
    return (
      <div className="App">
        <InvoicesContainer />
        <CustomersContainer />
      </div>
    );
  }
}

export default App;
