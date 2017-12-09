import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './../../Assets/Style/User.scss';
import { signup } from '../../Services/AuthServices';
import { register, validateOtp, resendOtp } from '../../Services/ApiServices';
import { Email, Password, RequireVal, Phone, ConformPassword } from './../../Helpers/FormValidation';

class SignUp extends Component {
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
      loading: false,
      error_msg: '',
      otpScreen: false,
      userDetails: [],
      userAccountDetails: [],
      signupForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
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
        fname_msg: RequireVal(this.state.signupForm.firstName),
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
    const { firstName, email, phone, password, cpassword } = this.state.signupForm;
    if (firstName && email && phone && password && cpassword) {
      signup(this.state.signupForm.email, this.state.signupForm.password).then(response => {
        console.log(this.state.signupForm);
        register(this.state.signupForm).then(response => {
          if (response.result) {
            this.setState({
              reg_error: '',
              userDetails: response.data.userDetails,
              userAccountDetails: response.data.accountDetails
            });
            this.setState({ otpScreen: true });
            this.setState({
              error_msg: 'something went wrong.'
            });
          }
        });
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
      localStorage.setItem('userDetails', JSON.stringify(this.state.userDetails));
      localStorage.setItem('userAccountDetails', JSON.stringify(this.state.userAccountDetails));
      this.props.history.push('/create-invoice');
    }
    console.log(this.state.otpForm);
  }
  resendOtp() {
    alert('sada');
    let data = {
      email: this.state.signupForm.email,
      phone: this.state.signupForm.phone

    }
    resendOtp(data).then(response => {
      if (response.result) {
      } else {
        this.setState({
          error_msg: 'something went wrong.'
        });
      }
    });
  }

  render() {
    if (this.state.otpScreen) {
      return (
        <div className="page_otp section_user">
          <p className="_title">Enter OTP</p>
          <div className="form_user">
            <div className="form-group">
              <label>Enter OTP</label>
              <input className="form-control" placeholder="" name="otp" value={this.state.otp} onChange={this.handleInputChangeOtpScreen} />
              <p className="mes_error">{this.state.OtpValidMes.Otp_msg}</p>
              <p className="mes_error api_error">{this.state.error_msg}</p>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.checkOtp}>Submit</button>
            <button type="submit" className="btn btn-primary" onClick={this.resendOtp.bind(this)}>Resend</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="page_signup section_user">
          <p className="_title">Sign Up</p>
          <div className="form_user">
            <div className="form-group">
              <label>First Name</label>
              <input className="form-control" type="text" name="firstName" value={this.state.firstName} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.fname_msg}</p>
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input className="form-control" type="text" name="lastName" value={this.state.lastName} onChange={this.InputHandler} />
            </div>

            <div className="form-group">
              <label>Email Id</label>
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

            <div className="form-group">
              <label>Confirm Password</label>
              <input className="form-control" type="password" name="cpassword" value={this.state.cpassword} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.cpassword_msg}</p>
            </div>
            <div className="txt_terms">
              <label className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input" name="rememberpassword" checked={this.state.isChecked} /><span className="custom-control-indicator"></span></label> By registering, you agree to our <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.</div>
            <p className="mes_error api_error">{this.state.error_msg}</p>
            <p className="text-right">
              <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Register</button>
            </p>
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