import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './../../Assets/Style/User.scss';

import { Email, Password } from './../../Helpers/FormValidation';
import { login } from '../../Services/AuthServices';


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
      if(e.target.name === 'email'){
        this.setState({
          email_errormes : Email(inputvalue)
        });
      }else if(e.target.name === 'password'){
        this.setState({
          password_errormes: Password(inputvalue)
      });
    }
  }

  RememberPassword() {
    const { rememberpassword } = this.state;
    console.log(rememberpassword)
  }


  HandleClick(e) {
    e.preventDefault();
    this.LoginValid();
    this.RememberPassword();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      login(email, password).then(response => {
        let result = JSON.stringify(response);
        localStorage.setItem('isLogin', true);
        this.props.history.push('/create-invoice');
        var userData = {
          firstName: 'Arpit',
          lastName: 'Gupta',
          email: '',
          phone: ''
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log(result);
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
        <div>

          <div className="form_login">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" onChange={this.InputHandler} />
              <p className="mes_error">{this.state.email_errormes}</p>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" onChange={this.InputHandler} />
              <p className="mes_error">{this.state.password_errormes}</p>
            </div>
            <p className="mes_error api_error">{this.state.error_msg}</p>
            <div className="form-check">
              <label className="custom-control custom-checkbox ">
                <input type="checkbox" className="custom-control-input" name="rememberpassword" checked={this.state.isChecked} />
                <span className="custom-control-indicator"></span>
                Remember Me
                </label>
            </div>

            <button type="submit" className="btn btn-primary btn_100" onClick={this.HandleClick}>Login</button>

            {/* <div className="section_socialmedia hide">
                <p className="txt_Signin"><strong>Or Sign in With Social Media</strong>You can also sign in with your social media accounts.</p>
                <div className="btn_socialmedia">
                  <a href="javascript:void(0)" className="btn _fb">Facebook</a>
                  <a href="javascript:void(0)" className="btn _twitter">Twitter</a>
                  <a href="javascript:void(0)" className="btn _google">google+</a></div>
              </div>*/}
          </div>

          <p className="txt_lost_password">
            <Link to="/forget-password" className="btn-link">Forgot your password?</Link>
          </p>
          <div className="section_registered">
            <p className="txt_notregistered">Not registered yet, Register Now</p>
            <p><Link to="/sign-up" className="btn btn-success">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;