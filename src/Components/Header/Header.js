import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import { signup, logout } from '../../Services/AuthServices';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      login: '',
      signup: '',
    }
    this.signOut = this.signOut.bind(this);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user && localStorage.getItem('isLogin')) {

      } else {

      }
    });
  }
  componentWillMount() {

  }
  signOut() {
    logout();
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userData');
    this.props.history.push('/create-invoice');
  }
  render() {
    if (localStorage.getItem('isLogin')) {
      this.state.login = <Link to="#" className="link_signin" onClick={this.signOut}>Sign Out</Link>;
      this.state.signup = '';
    } else {
      this.state.login = <Link to="/sign-in" className="link_signin">Sign In</Link>;
      this.state.signup = <Link to="/sign-up">Sign Up</Link>;
    }
    return (
      <header className="_header">
        <div className="strip_red">
          <div className="container-fluid clearfix">
            <Link to="/create-invoice" className="brandlogo"><strong>INCRED</strong> INVOICES</Link>
            <ul className="nav nav-pills float-right">
              <li className="nav-item"><Link to="/create-invoice">Create Invoice</Link></li>
              <li className="nav-item"><Link to="/view-past-invoice">View Past Invoice</Link></li>
              <li className="nav-item"><Link to="/track-payments-due">Track Payments Due</Link></li>
              <li className="nav-item"><Link to="/account-overview">Account Overview</Link></li>
              <li className="nav-item"><Link to="/record-expenses">Record Expenses</Link></li>
              <li className="nav-item"><Link to="/view-pass-expenses">View Pass Expenses</Link></li>
            </ul>
          </div>
        </div>
        <div className="strip_black">
          <div className="container-fluid">
            <div className="row">
              <div className="col">THE PROFESSIONAL GST INVOICING AND EXPENSE APPLICATION</div>
              <div className="col text-align-right">
                {this.state.login}
                {this.state.signup}
              </div>
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Header;
