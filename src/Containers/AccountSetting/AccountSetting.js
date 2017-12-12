import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { countries } from 'country-data';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';
import firebase from 'firebase';
import { getUserAccounts, addAccount, getUserAccountDetails } from '../../Services/ApiServices';
//import Flag from "react-flags";
import './../../Assets/Style/User.scss';

class AccountSetting extends Component {
  constructor(props) {
    super(props);
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    this.state = {
      accountData: [],
      accountId: '',
      isLogin: false,
      accountForm: {
        accountName: '',
        country: 'India',
        userId: (userData ? userData.id : '')
      },
    }
    this.getAccounts = this.getAccounts.bind(this);
    this.InputHandler = this.InputHandler.bind(this);
  }
  componentWillMount() {
    if(localStorage.getItem('isLogin')){
      this.setState({
        isLogin:true
      })
      this.getAccounts();
    }
  }
  InputHandler(e) {
    this.state.accountForm[e.target.name] = e.target.value;
    this.setState({
      accountForm: this.state.accountForm,
    });
    console.log(this.state.accountForm);
  }
  HandleClick(e) {
    e.preventDefault();
    addAccount(this.state.accountForm).then(response => {
      if (response.result) {
        this.getAccounts();
        this.state.accountForm.accountName = '';
      } else {
        this.setState({
          error_msg: 'something went wrong.'
        });
      }
    });

  }
  onSelectFlag(countryName) {
    this.state.accountForm.country = countries[countryName].name;
    this.setState({
      accountForm: this.state.accountForm,
    });
  }
  getAccounts() {
    getUserAccounts(this.state.accountForm.userId).then(response => {
      if (response.result) {
        this.setState({ accountData: response.data });
      } else {
        this.setState({
          error_msg: 'something went wrong.'
        });
      }
    });
  }
  selectAccount(e) {
    this.setState({
      accountId: e.target.value
    });
    getUserAccountDetails(e.target.value).then(response => {
      if (response.result) {
        localStorage.setItem('userAccountDetails', JSON.stringify(response.data));
      } else {
        this.setState({
          error_msg: 'something went wrong.'
        });
      }
    });
  }
  render() {
    let i = 1;
    let options = this.state.accountData.map(function (option) {
      return (
        <option key={option.id} value={option.id}>A/C{i++}:
                 {option.accountName}
        </option>
      )
    });
    i++;
    return (
      <div className="page_account_setting section_user">
        <p className="_title">ACCOUNT SETTINGS</p>
        <p className="text-center userbtn_account_setting ad-md-show">
          <Link to="/sign-in" className="btn btn-primary _mr10">SIGN IN</Link>
          <Link to="/register" className="btn btn-primary">REGISTER</Link>
        </p>
        <div className="form_user">
          <div className={'form-group' + this.state.isLogin ? '' : 'disable'}>
          
            <label>SELECT ACCOUNT</label>
            <select id={this.props.id}
              className='form-control'
              value={this.state.accountId}
              onChange={this.selectAccount.bind(this)}>
              
              {options}

              { 
                //console.log((localStorage.getItem('isLogin'))
                (localStorage.getItem('isLogin')) ? '<option value="1">Guest</option>' : ''
              }

              
            </select>
          </div>

          <div className="form-group">
            <div className={this.state.isLogin ? '' : 'disable'}>
            <label>ADD NEW ACCOUNT</label>
            <div className="form_addaccount">
              <input type="text" className="form-control" name="accountName" value={this.state.accountForm.accountName} onChange={this.InputHandler} />
              <a href="javascript:void(0)" className="btn btn-primary" onClick={this.HandleClick.bind(this)}>ADD</a>
            </div>
            </div>
          </div>

          <div className={'form-group' + this.state.isLogin ? '' : 'disable'}>
            <label>SELECT COUNTRY</label>
            <ReactFlagsSelect defaultCountry="IN" onSelect={this.onSelectFlag.bind(this)} className="style_flag" />
          </div>

          <p className="_subtitle">account details</p>
          <div className="form-group">
            <label>SELECT APP LANGUAGE</label>
            <ReactFlagsSelect defaultCountry="IN" onSelect={this.onSelectFlag} className="style_flag" />
          </div>

          <a href="javascript:void(0)" className= {'btn btn-white ' + ((this.state.isLogin) ? '' : 'disable')} >YOUR PAYMENTS</a>
          <a href="javascript:void(0)" className= {'btn btn-white ' + ((this.state.isLogin) ? '' : 'disable')} >EDIT YOUR BASIC DETAILS</a>
        </div>
      </div>
    );
  }
}

export default AccountSetting;