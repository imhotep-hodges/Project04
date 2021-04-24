import React from 'react';
import './App.css';
import {useState} from 'react';
import Stock from './Stock';
import data from '/Users/larryh1981/Documents/Projects/Project04/project_4/src/data';


function App() {
  return (
    <div className="App">
      
      
      <div className="container">
          <div className="row">
              <div className="col-3">
                [Blank Space]
              </div>
              <div className="col-6">
              <h1 className='text-uppercase'>Minion Paper Trading</h1>
              </div>
              <div className="col-3">
                Welcome, "User"!
              </div>
              
          </div>
          

          <div className="row my-3">
              <div className="col-md-8 col-sm-12 border border-light my-3 py-4">
                
                  <input type="search" id="gsearch" name="gsearch" className="rounded" placeholder="Search..." />
                   <button type="submit" className="rounded"> Search </button>
                    <br></br>
              
                    <button className="rounded">Buy</button>
                    <button className="rounded">Sell</button>
                    <br></br>
                    <Stock></Stock>



              
              

              </div>

              <div className="col-md-4 col-sm-12 border border-light my-3 py-4">
                <h6 className='text-left'>Portfolio</h6>
                

                
                <table className="table table-bordered table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Stock</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Value</th>
                      <th scope="col">Buy/Sell</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <input placeholder='Quantity' className="rounded"/>
                <select name="shares" id="shares" className="rounded">
                <option value="Select">Select</option>
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                 
                </select>

              
              
              </div>
              
          </div>
      </div>



    </div>
  );
}

export default App;
