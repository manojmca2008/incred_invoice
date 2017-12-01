import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginForm: {
        userid: '',
        password:''
      }
    }
    this.Loginchange = this.Loginchange.bind(this);
    this.LoginSubmit = this.LoginSubmit.bind(this);
  }
  Loginchange(e){
     
    const { name, value } = e.target;
    this.setState({ [name]: value });      
     
  }
  LoginSubmit(e) {
    console.log(this.state.LoginForm);
  } 
  render() {
    return (
      <div className="container page_signin">
        <div className="section_login">
          <p className="_title">Sign In</p>
          <div className="row">
            <div className="col">
              <div className="form_login">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" value={this.state.userid} onChange={this.Loginchange} />
                  <p className="mes_error"></p>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" value={this.state.password} onChange={this.Loginchange} />
                </div>
                <div className="form-check">
                  <label className="custom-control custom-checkbox ">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    Remember Me
                </label>
                </div>
                <button type="submit" className="btn btn-primary btn_login"  onClick={this.LoginSubmit}>Login</button>
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