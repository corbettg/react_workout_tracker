import React, { Component } from 'react';
import WorkoutDayCount from './components/WorkoutDayCount';
import AddDatabaseForm from './components/AddDatabaseForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>UNCW RANDALL LIBRARY A-Z LIST</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <AddDatabaseForm/>
            </div>
            <div className="col-sm-8">
               <WorkoutDayCount total={36} running={12} climbing={24} goal={50}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
