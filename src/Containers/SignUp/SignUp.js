import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../../Assets/Style/User.scss';

import { signup } from '../../Services/AuthServices';
import { register, validateOtp } from '../../Services/ApiServices';

import { Email, Password, RequireVal, Phone, ConformPassword } from './../../Helpers/FormValidation';

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
      SignupFormMes: {

      },
      otpForm: {
        otp: '',
      },
      OtpValidMes: {
        Otp_msg: ''
      }
    }
    this.InputHandler = this.InputHandler.bind(this);
    this.SignUpValid = this.SignUpValid.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChangeOtpScreen = this.handleInputChangeOtpScreen.bind(this);
    this.checkOtp = this.checkOtp.bind(this);
  }


  SignUpValid() {
    this.setState({
      SignupFormMes: {
        fname_msg: RequireVal(this.state.signupForm.fname),
        email_msg: Email(this.state.signupForm.email),
        phone_msg: Phone(this.state.signupForm.phone),
        password_msg: Password(this.state.signupForm.password),
        cpassword_msg: ConformPassword(this.state.signupForm.cpassword)
      }
    })
  }
  InputHandler(e) {
    this.state.signupForm[e.target.name] = e.target.value;
    this.setState({
      signupForm: this.state.signupForm,
    });
    this.SignUpValid();
  }
  handleClick(e) {
    e.preventDefault();
    this.SignUpValid();
    const { fname, email, phone, password, cpassword } = this.state.signupForm;
    if (fname && email && phone && password && cpassword) {
      signup(this.state.signupForm.email, this.state.signupForm.password).then(response => {
        let result = JSON.stringify(response);
        var userData = {
          firstName: this.state.signupForm.fname,
          lastName: this.state.signupForm.lname,
          email: this.state.signupForm.email,
          phone: this.state.signupForm.phone
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
      })
    }
  }

  handleInputChangeOtpScreen(event) {
    this.state.otpForm[event.target.name] = event.target.value;
    this.setState({ otpForm: this.state.otpForm });
    this.OtpValid();
  }
  OtpValid() {
    this.setState({
      OtpValidMes: {
        Otp_msg: RequireVal(this.state.otpForm.otp)
      }
    })
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
    this.OtpValid();
    const { otp } = this.state.otpForm;
    if (otp) {
      localStorage.setItem('isLogin', true);
      this.props.history.push('/create-invoice');
    }
    console.log(this.state.otpForm);
  }

  render() {
    if (this.state.otpScreen) {
      return (
        <div className="page_otp section_user">
          <p className="_title">Enter OTP</p>
          <div className="form-group">
            <label>Enter OTP</label>
            <input className="form-control" placeholder="" name="otp" value={this.state.otp} onChange={this.handleInputChangeOtpScreen} />
            <p className="mes_error">{this.state.OtpValidMes.Otp_msg}</p>
            <p className="mes_error api_error">{this.state.error_msg}</p>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.checkOtp}>Submit</button>
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
              <p className="mes_error">{this.state.SignupFormMes.fname_msg}</p>
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input className="form-control" type="text" name="lname" value={this.state.lname} onChange={this.InputHandler} />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.email_msg}</p>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input className="form-control" type="number" name="phone" value={this.state.phone} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.phone_msg}</p>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.password_msg}</p>
            </div>

            <div className="form-group _mb30">
              <label>Confirm Password</label>
              <input className="form-control" type="password" name="cpassword" value={this.state.cpassword} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.cpassword_msg}</p>
            </div>
            <p className="mes_error api_error">{this.state.error_msg}</p>
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