import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Router from "./Router/Router";

import 'bootstrap/scss/bootstrap.scss';
import './Assets/Style/Screen.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
