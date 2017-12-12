import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './../../Assets/Style/User.scss';

import { Email, Password } from './../../Helpers/FormValidation';
import { login } from '../../Services/AuthServices';
import { signin } from '../../Services/ApiServices';


class SignIn extends Component {
  constructor(props) {
    super(props);
    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user && localStorage.getItem('isLogin')) {
        self.props.history.push('/create-invoice');
      } else {

      }
    });
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    //console.log(this.props.location.pathname);
    this.HandleClick = this.HandleClick.bind(this);
    this.InputHandler = this.InputHandler.bind(this);
  }

  LoginValid() {
    this.setState({
      email_errormes: Email(this.state.email),
      password_errormes: Password(this.state.password)
    })
  }

  InputHandler(e) {
    //this.LoginValid();
    let inputvalue = e.target.value;
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (e.target.name === 'email') {
      this.setState({
        email_errormes: Email(inputvalue)
      });
    } else if (e.target.name === 'password') {
      this.setState({
        password_errormes: Password(inputvalue)
      });
    }
  }

  HandleClick(e) {
    e.preventDefault();
    this.LoginValid();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    this.setState.loading = false
    if (email && password) {
      this.setState.loading = true
      login(email, password).then(response => {
        let data = {
          email: email,
        }
        signin(data).then(response => {
          if(response.result){
            localStorage.setItem('isLogin', true);
            localStorage.setItem('userDetails', JSON.stringify(response.data.userDetails));
            localStorage.setItem('userAccountDetails', JSON.stringify(response.data.accountDetails));
            this.props.history.push('/create-invoice');
            this.setState.loading = false
          }else{
              this.setState({
                error_msg: response.message,
                loading : false
              });
              console.log(response.message, response);
          }
        
      });
      }).catch(err => {
        this.setState({
          error_msg: err.message
        });
      })
    }
  }
  render() {
    return (
      <div className="page_signin section_user">
        <p className="_title">Sign In</p>
        <div className="form_user">

          <div className="form_login">
            <div className="form-group">
              <label>Email Id</label>
              <input type="text" className="form-control" name="email" onChange={this.InputHandler} />
              <p className="mes_error">{this.state.email_errormes}</p>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" onChange={this.InputHandler} />
              <p className="mes_error">{this.state.password_errormes}</p>
            </div>
            <p className="mes_error api_error">{this.state.error_msg}</p>
            {/*<div className="form-check">
              <label className="custom-control custom-checkbox ">
                <input type="checkbox" className="custom-control-input" name="rememberpassword" checked={this.state.isChecked} />
                <span className="custom-control-indicator"></span>
                Remember Me
                </label>
            </div>*/}
            <p className="txt_terms">By continuing, you agree to our <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            <p className="text-center">
              <button type="submit" className={'btn btn-primary _mr10 ' + ((this.state.loading) ? 'btndisabled' : '')} onClick={this.HandleClick}>Login</button>
              <Link to="/forget-password" className="btn btn-primary">Lost your password?</Link>
            </p>

            {/* <div className="section_socialmedia hide">
                <p className="txt_Signin"><strong>Or Sign in With Social Media</strong>You can also sign in with your social media accounts.</p>
                <div className="btn_socialmedia">
                  <a href="javascript:void(0)" className="btn _fb">Facebook</a>
                  <a href="javascript:void(0)" className="btn _twitter">Twitter</a>
                  <a href="javascript:void(0)" className="btn _google">google+</a></div>
              </div>*/}
          </div>
          <div className="section_registered">
            <p className="txt_notregistered">Not registered yet, Register Now</p>
            <p><Link to="/register" className="btn btn-success">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;