import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import Router from "./Router/Router";

import 'bootstrap/scss/bootstrap.scss';
import './Assets/Style/Screen.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    
  }
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
