import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Services/AuthServices';
import { Redirect } from 'react-router';

class UserSettings extends Component {
  signOut() {
    localStorage.clear();
    //localStorage.removeItem('isLogin');
    //localStorage.removeItem('userData');
    logout();
    
  }
  render() {
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    return (
      <div className="user_dropdown">
        { (userData) ? userData.firstName + ' ' + userData.lastName : 'Guest' }
        <div className="user_setting">
          <Link to="/account-setting">ACCOUNT SETTING</Link>
          <Link to="#" onClick={this.signOut.bind(this)}>Sign Out</Link>
        </div>
      </div>
    );
  }
}

export default UserSettings;
