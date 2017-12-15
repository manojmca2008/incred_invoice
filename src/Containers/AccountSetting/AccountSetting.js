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
      accountId: (localStorage.getItem('isLogin') === null) ?  '' : localStorage.getItem('selectedAccountId') ,
      isLogin: false,
      accountForm: {
        accountName: '',
        country: 'India',
        userId: (userData ? userData.id : ''),
        invoiceStartNo : '',
        currency: ''
      },
    }
    console.log(localStorage.getItem('selectedAccountId'))
    this.getAccounts = this.getAccounts.bind(this);
    this.InputHandler = this.InputHandler.bind(this);
    //this.onSelectedCurrency = this.onSelectedCurrency.bind(this);
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
      if (response.status) {
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
    console.log(this.state.accountForm.userId);
    getUserAccounts(this.state.accountForm.userId).then(response => {
      if (response.status) {
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
      if (response.status) {
        localStorage.setItem('userAccountDetails', JSON.stringify(response.data));
        localStorage.setItem('selectedAccountId', this.state.accountId)
      } else {
        this.setState({
          error_msg: 'something went wrong.'
        });
      }
    });
  }
  render() {
    let options;
    if(localStorage.getItem('isLogin') === null){
      options = <option value=''> Guest</option>
    }else{
      let i = 1;
      options = this.state.accountData.map(function (option) {
        return (
          <option key={option.id}  value={option.id}>A/C {i++} : {option.accountName}
          </option>
        )
      });
      i++;
    }
    const onSelectedCurrency = currencyAbbrev => {
      //debug(`Selected ${currencyAbbrev}`)
    }
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
            <select className='form-control' value={ this.state.accountId } onChange={this.selectAccount.bind(this)}>
              {options}
            </select>
          </div>
          <div className={'form-group ' + ((this.state.isLogin) ? '' : 'disable')}>
            <label>ADD NEW ACCOUNT</label>
            <div className="form_addaccount">
              <input type="text" className="form-control" name="accountName" value={this.state.accountForm.accountName} onChange={this.InputHandler} />
              <a href="javascript:void(0)" className="btn btn-primary" onClick={this.HandleClick.bind(this)}>ADD</a>
            </div>
            </div>

            <div className={'form-group ' + ((this.state.isLogin) ? '' : 'disable')}>
              <label>CURRENCY</label>
              <input type="text" className="form-control"  maxLength="5" placeholder="INR" name="currency" value={this.state.accountForm.currency} onChange={this.InputHandler} />
            </div>

            <div className={'form-group ' + ((this.state.isLogin) ? '' : 'disable')}>
            <label>SELECT COUNTRY</label>
            <ReactFlagsSelect defaultCountry="IN" onSelect={this.onSelectFlag.bind(this)} className="style_flag" />
          </div>

          <div className={'form-group ' + ((this.state.isLogin) ? '' : 'disable')}>
              <label>START INVOICE NO</label>
              <input type="number" className="form-control"  maxLength="10" name="invoiceStartNo" value={this.state.accountForm.invoiceno} onChange={this.InputHandler} />
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