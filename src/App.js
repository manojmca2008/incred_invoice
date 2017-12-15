import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import Router from "./Router/Router";
import { getUserDetails } from './Services/ApiServices';


import 'bootstrap/scss/bootstrap.scss';
import './Assets/Style/Screen.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.userDetails();
  }
  userDetails() {
    getUserDetails().then(response => {
      console.log(response);
      if (response.status) {
        //this.setState({ accountData: response.data });
      } else {
        this.setState({
          error_msg: 'something went wrong.'
        });
      }
      
    });
    //console.log('d');
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
