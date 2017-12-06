import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Services/AuthServices';
import { Redirect } from 'react-router';

class UserSettings extends Component {
  signOut() {
    logout();
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userData');
    <Redirect to='/create-invoice'/>;
  }
  render() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    return (
      <div className="user_dropdown">
        { userData.firstName + ' ' + userData.lastName }
        <div className="user_setting">
          <Link to="/account-setting">ACCOUNT SETTING</Link>
          <Link to="#" className="link_signin" onClick={this.signOut.bind(this)}>Sign Out</Link>
        </div>
      </div>
    );
  }
}

export default UserSettings;
