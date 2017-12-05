import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../../Assets/Style/User.scss';

import { signup } from '../../Services/AuthServices';
import { register, validateOtp } from '../../Services/ApiServices';

import { Email, Password, RequireVal, Phone, ConformPassword} from './../../Helpers/FormValidation';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error_msg: '',
      otpScreen: false,
      signupForm: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
        source: ''
      },
      otpForm: {
        otp: '',
      }
    }
    this.InputHandler = this.InputHandler.bind(this);
    this.SignUpValid = this.SignUpValid.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChangeOtpScreen = this.handleInputChangeOtpScreen.bind(this);
    this.checkOtp = this.checkOtp.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    //this.SignUpValid();
    console.log(this.state.signupForm);
    /*signup(this.state.signupForm.email, this.state.signupForm.password).then(response => {
      let result = JSON.stringify(response);
      var userData = {
        fname: this.state.signupForm.fname,
        lname: this.state.signupForm.lname,
        email: this.state.signupForm.email,
        phone: this.state.signupForm.phone,
        password: this.state.signupForm.password,
        source: 'ws',
      }
      //   register(userData).then(response => {
      //     console.log(response);
      //     if(response.result){
      //         this.setState({ reg_error: '' });
      //         var self = this;
      //     }else{
      //         this.setState({
      //           error_msg: 'something went wrong.'
      //         });
      //     }
      // }); 
      localStorage.setItem('userData', JSON.stringify(userData));
      this.setState({ otpScreen: true });
    }).catch(err => {
      this.setState({
        error_msg: err.message
      });
    })*/
  }

  handleInputChangeOtpScreen(event) {
    this.state.otpForm[event.target.name] = event.target.value;
    this.setState({ otpForm: this.state.otpForm });
  }
  SignUpValid() {
    this.setState({
      // SignupFormMes: {
      //   fname_msg: RequireVal(this.state.signupForm.fname),
      //   email_msg: Email(this.state.signupForm.email),
      //   phone_msg: Phone(this.state.signupForm.phone),
      //   password_msg: Password(this.state.signupForm.password),
      //   cpassword_msg: ConformPassword(this.state.signupForm.cpassword)
      // }
    })

  }
  InputHandler(e) {
    let inputvalue = e.target.value;
    const { name, value } = e.target;
    this.setState({
      SignupForm: {
        [name]: value
      },
      SignupFormMes: {
        [name]: value
      }
    });
    console.log(this.state.signupForm);
    switch (e.target.name) {
      case 'fname':
        this.setState({
          SignupFormMes: {
            fname_msg: RequireVal(inputvalue)
          }
        })
        break;
      case 'email':
        this.setState({
          SignupFormMes: {
            email_msg: Email(inputvalue)
          }
        })
        break;
      case 'phone':
        this.setState({
          SignupFormMes: {
            phone_msg: Phone(inputvalue)
          }
        })
        break;
      case 'password':
        this.setState({
          SignupFormMes: {
            password_msg: Password(inputvalue)
          }
        })
        break;
      case 'cpassword':
      this.setState({
        SignupFormMes: {
          cpassword_msg: ConformPassword(inputvalue)
        }
    })
    break;
      default:
    }
  }
checkOtp() {
  //   validateOtp(this.state.otpForm.otp).then(response => {
  //     console.log(response);
  //     if(response.result){

  //     }else{
  //         this.setState({
  //           error_msg: 'something went wrong.'
  //         });
  //     }
  // }); 

  console.log(this.state.otpForm);
  localStorage.setItem('isLogin', true);
  //window.location.reload();
  this.props.history.push('/create-invoice');
}

render() {
  if (this.state.otpScreen) {
    return (
      <div>
        <p className="_title">Enter OTP</p>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Enter OTP</label>
              <input className="form-control" placeholder="" name="otp" value={this.state.otp} onChange={this.handleInputChangeOtpScreen} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.checkOtp}>Submit</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="page_signup section_user">
        <p className="_title">Sign Up</p>
        <div className="">
          <div className="form-group">
            <label>First Name</label>
            <input className="form-control" type="text" name="fname" value={this.state.fname} onChange={this.InputHandler} />
            <p className="mes_error">{this.state.signupForm.fname_msg}</p>
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input className="form-control" type="text" name="lname" value={this.state.lname} onChange={this.InputHandler} />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.InputHandler} />
            <p className="mes_error">{this.state.signupForm.email_msg}</p>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input className="form-control" type="number" name="phone" value={this.state.phone} onChange={this.InputHandler} />
            <p className="mes_error">{this.state.signupForm.phone_msg}</p>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.InputHandler} />
            <p className="mes_error">{this.state.signupForm.password_msg}</p>
          </div>

          <div className="form-group _mb30">
            <label>Confirm Password</label>
            <input className="form-control" type="password" name="cpassword" value={this.state.cpassword} onChange={this.InputHandler} />
            <p className="mes_error">{this.state.signupForm.cpassword_msg}</p>
          </div>
          <button type="submit" className="btn btn-primary btn_100" onClick={this.handleClick}>Submit</button>
        </div>
        <div className="section_registered">
          <p className="txt_notregistered">Already have an account</p>
          <p><Link to="/sign-in" className="btn btn-success">login</Link></p>
        </div>
      </div>
    );
  }
}
}
export default SignUp;