import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { showFormErrors, showInputError } from './../../helpers/FormValidation';
import { BLANK_VALId, EMAIL_VALId } from './../../Constant/Messages';
import { Field, reduxForm } from 'redux-form'
import { login} from '../../Services/AuthServices';


class SignIn extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      email1: '',
      submitted: false,
      error_msg: '',
    }

    this.LoginSubmit = this.LoginSubmit.bind(this);
    this.Loginchange = this.Loginchange.bind(this);
    
  }
  Loginchange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  LoginSubmit(e) {
    e.preventDefault();
    let aa = this.state.email;
    let emailFormat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var testi = '';
    if(!this.state.email){
      
    aa = BLANK_VALId
      console.log('1');
      
    }else if(!emailFormat.test(this.state.email)){
       aa =  EMAIL_VALId
      console.log('2');
    }else{
      aa =  '';
    }
    this.setState({
      email1: aa
    })
    this.setState({ submitted: true });
    const {email, password} = this.state;
    const { dispatch } = this.props;
    if(email && password){
      console.log('thanks');
      login(email, password).then(response => {
        let result = JSON.stringify(response);
        localStorage.setItem('isLogin', true);
        this.props.history.push('/create-invoice');
        console.log(result);
        // var userData = {
        //   fname: this.state.signupForm.fname,
        //   lname: this.state.signupForm.lname,
        //   email: this.state.signupForm.email,
        //   phone: this.state.signupForm.phone,
        //   password: this.state.signupForm.password,
        //   source: 'ws',
        // }
        // localStorage.setItem('userData', JSON.stringify(userData));
      }).catch(err => {
        this.setState({
          error_msg: err.message
        });
      })
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
                  <p className="mes_error"> {this.state.email1} </p>
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                  <label id="passwordLabel">Password</label>
                  <input type="password" className="form-control" name="password" ref="password" value={this.state.password} onChange={this.Loginchange} />
                  {
                    submitted && !password && 
                    <p className="mes_error">Arpit</p>                    
                  }
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
              <p><Link to="/sign-up">{this.state.error_msg}Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;