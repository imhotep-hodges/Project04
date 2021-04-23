import React from 'react';
import './App.css';
import Header from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/components-header/Header';
import Subheader from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/components-subheader/Subheader';
import ExchangeList from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/ExchangeList/ExchangeList';
import data from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/data';
import InfoCard from './InfoCard/InfoCard';
import styles from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/App.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader>
        <ExchangeList exchanges={data.exchanges} />
        <div className={styles.infoCardContainer}>
          <InfoCard title='Test Card 1' stock={{ ticker: 'VEI', amount: 20 }} />
          <InfoCard title='Test Card 2' stock={{ ticker: 'VEI', amount: 20 }} />
          <InfoCard title='Test Card 3' stock={{ ticker: 'VEI', amount: 20 }} />
        </div>
      </Subheader>
      
    </div>
  );
}

export default App;
