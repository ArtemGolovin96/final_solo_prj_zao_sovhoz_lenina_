import React, { Component } from 'react';
import store from './redux/store';
import { Route } from 'react-router-dom';
import { Provider } from "react-redux";
import Favicon from 'react-favicon'

import LoginPage from './components/LoginPage/LoginPage';



import logo from './logo.svg';
import './App.css';



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Favicon url={logo} />
        <title>{logo}</title>
          <Route path="/" exact component={LoginPage} />
      </div>
      </Provider>
    );
  }
}


