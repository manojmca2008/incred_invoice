import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { BLANK_VALId, EMAIL_VALId } from './../../Constant/Messages';

import { Email, Password } from './../../Helpers/FormValidation';

import { Field, reduxForm } from 'redux-form'



class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false,

      email_errormes : '',
      password_errormes : '',

    }

    this.LoginSubmit = this.LoginSubmit.bind(this);
    this.Loginchange = this.Loginchange.bind(this);

  }

  LoginValid() {
    this.setState({
      email_errormes : Email(this.state.email),
      password_errormes : Password(this.state.password)
    })
  }

  Loginchange(e) {
    e.preventDefault();
    this.LoginValid();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  LoginSubmit(e) {
    e.preventDefault();
    this.LoginValid();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      console.log('thanks');
      //dispatch(userActions.login(email, password));
    }



  }
  render() {
    const { email, password, submitted } = this.state;
    return (
      <div className="container page_signin">
        <div className="section_login">
          <p className="_title">Sign In</p>
          <div className="row">
            <div className="col">
              <div className="form_login">
                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                  <label id="emailLabel">Email</label>
                  <input type="text" className="form-control" name="email" value={email} onChange={this.Loginchange} />
                  <p className="mes_error"> {this.state.email_errormes} </p>
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label id="passwordLabel">Password</label>
                  <input type="password" className="form-control" name="password" ref="password" value={this.state.password} onChange={this.Loginchange} />
                  <p className="mes_error"> {this.state.password_errormes} </p>
                </div>
                <div className="form-check">
                  <label className="custom-control custom-checkbox ">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    Remember Me
                </label>
                </div>
                <button type="submit" className="btn btn-primary btn_login" onClick={this.LoginSubmit}>Login</button>
              </div>
              <div className="section_socialmedia">
                <p className="txt_Signin"><strong>Or Sign in With Social Media</strong>You can also sign in with your social media accounts.</p>
                <div className="btn_socialmedia">
                  <a href="javascript:void(0)" className="btn _fb">Facebook</a>
                  <a href="javascript:void(0)" className="btn _twitter">Twitter</a>
                  <a href="javascript:void(0)" className="btn _google">google+</a></div>
              </div>
            </div>
            <div className="col">
              <p><Link to="/forget-password">Lost your password?</Link></p>
              <p>Not registered yet, Register Now</p>
              <p><Link to="/sign-up">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;