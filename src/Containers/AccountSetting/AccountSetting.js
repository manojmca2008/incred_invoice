import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { countries } from 'country-data';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';


import './../../Assets/Style/User.scss';

class AccountSetting extends Component {
  constructor(props){
    super(props);
  }
  onSelectFlag(countryName){
    console.log(countries[countryName].name)
  }
  render() {   
    return (
      <div className="page_account_setting section_user">
          <p className="_title">ACCOUNT SETTINGS</p>
          <p className="text-center userbtn_account_setting ad-md-show">
              <Link to="/sign-in" className="btn btn-primary _mr10">SIGN IN</Link>
              <Link to="/register" className="btn btn-primary">REGISTER</Link>
          </p>
          <div className="form_user">
          <div className="form-group">
            <label>SELECT ACCOUNT</label>
            <select class="form-control">
              <option>A/C 1 :  ARPIT GUPTA</option>
              <option>A/C 1 :  ASHOK GUPTA</option>
            </select>
          </div>

          <div className="form-group">
            <label>ADD NEW ACCOUNT</label>
            <div className="form_addaccount">
              <input type="text" class="form-control" name="email" />
              <a href="javascript:void(0)" className="btn btn-primary">ADD</a>
            </div>
          </div>

          <div className="form-group">
            <label>SELECT COUNTRY</label>
            <ReactFlagsSelect defaultCountry="IN" onSelect={this.onSelectFlag} className="style_flag" />
          </div>

          <p className="_subtitle">account details</p>
          <div className="form-group">
            <label>SELECT APP LANGUAGE</label>
            <ReactFlagsSelect defaultCountry="IN" onSelect={this.onSelectFlag} className="style_flag" />
          </div>

          <a href="javascript:void(0)" className="btn btn-white disable">YOUR PAYMENTS</a>
          <a href="javascript:void(0)" className="btn btn-white disable">EDIT YOUR BASIC DETAILS</a>
        </div>
      </div>
    );
  }
}

export default AccountSetting;