import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import UserSettings from './UserSettings';

//import test from 'ava';

import languages from './../Languages/Languages';
//import translate from './../Languages/LanguagesFunction';

import { signup, logout } from '../../Services/AuthServices';
import './../../Assets/Style/Header.scss';


class Header extends Component {
  constructor(props) {

    super(props);
    this.state = {
      dropdownstage: '',
      isLogin: false,
      login: '',
      signup: ''
    }
    firebase.auth().onAuthStateChanged(function (user) {
      if (user && localStorage.getItem('isLogin')) {

      } else {

      }
    });
  }

  getInitialState() {
    return { "dropdownActive": "" };
  }

  componentWillMount() {

  }

  DropDownOff = () => {
    this.setState({
      dropdownstage: !this.state.dropdownstage ? 'dropdownactive' : ''
    });

  }

  render() {
    if (localStorage.getItem('isLogin')) {
      this.state.login = <UserSettings />;
      this.state.signup = '';
      this.state.setting = '';
    } else {
      this.state.setting = <Link to="/account-setting" className="link_signin">ACCOUNT SETTING</Link>
      this.state.login = <Link to="/sign-in" className="link_signin">Sign In</Link>;
      this.state.signup = <Link to="/register">REGISTER</Link>;
    }
    return (

      <header className={'_header ' + this.state.dropdownstage} >
        <div className="strip_red">
          <div className="container-fluid clearfix">
            <div className="mobile_dropdown ad-md-show" onClick={this.DropDownOff} >
              <i className="burger-icon"></i>
            </div>
            <Link to="/create-invoice" className="brandlogo"><strong>INCRED</strong> INVOICES</Link>
            <ul className="nav nav-pills float-lg-right header_dropdown">
              <li className="nav-item"><Link to="/create-invoice" onClick={this.DropDownOff}>Create Invoice</Link></li>
              <li className="nav-item"><Link to="/view-past-invoice" onClick={this.DropDownOff}>View Past Invoice</Link></li>
              <li className="nav-item"><Link to="/track-payments-due" onClick={this.DropDownOff}>Track Payments Due</Link></li>
              <li className="nav-item"><Link to="/account-overview" onClick={this.DropDownOff}>Account Overview</Link></li>
              <li className="nav-item"><Link to="/record-expenses" onClick={this.DropDownOff}>Record Expenses</Link></li>
              <li className="nav-item bordernone"><Link to="/view-pass-expenses" onClick={this.DropDownOff}>View Past Expenses</Link></li>

              <li className="mobile_dropdown_footer ad-md-show">
                <div className="_p">
                  <p>ARPIT GUPTA</p>
                  <Link to="/account-setting" onClick={this.DropDownOff} >A/C SETTINGS</Link> | INDIA
                </div>
                  <p className="txt_sendsuggestions">SEND SUGGESTIONS TO APP BUILDER</p>
                  <div className="_p">
                    <Link to="/terms-of-service">Terms of use</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="strip_black">
          <div className="container-fluid">
            <div className="row">
              <div className="col">THE PROFESSIONAL GST INVOICING AND EXPENSE APPLICATION</div>
              <div className="col text-right ad-md-hide">
                {this.state.setting}
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
