import React, { Component } from 'react';
import AddDatabaseForm from './components/AddDatabaseForm';
import DatabaseList from './components/DatabaseList';
import LoginModel from './components/LoginModel';
import storeFactory from './store'
import initialState from './initialState'
import { Provider } from 'react-redux'
import './App.css';

const store = storeFactory(initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className='App-header'>
            <div className='pull-right'>
              <LoginModel/>
            </div>
            <h1>UNCW RANDALL LIBRARY A-Z LIST</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <AddDatabaseForm/>
              </div>
              <div className="col-sm-6">
                 <DatabaseList/><br/><br/>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
