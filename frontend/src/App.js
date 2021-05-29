import React, { Component } from 'react';
import store from './redux';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage'


import logo from './logo.svg';
import './App.css';

import LoginPage from './components/LoginPage/LoginPage'



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Route path="/login" exact component={LoginPage} />
      </div>
      </Provider>
    );
  }
}

export default App;
