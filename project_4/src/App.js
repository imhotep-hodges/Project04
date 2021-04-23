import React from 'react';
import './App.css';
import Header from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/components-header/Header';
import Subheader from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/components-subheader/Subheader';
import ExchangeList from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/ExchangeList/ExchangeList';
import data from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader>
        <ExchangeList exchanges={data.exchanges} />
      </Subheader>
      
    </div>
  );
}

export default App;
