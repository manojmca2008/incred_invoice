import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './../../Assets/Style/User.scss';
import { signup } from '../../Services/AuthServices';
import { register, validateOtp, resendOtp } from '../../Services/ApiServices';
import { Email, Password, RequireVal, Phone, ConformPassword, CheckboxTrue } from './../../Helpers/FormValidation';


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
      userId : '',
      checkterms: false,

      signupForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
        isChecked: ''
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

  SignUpValid(e) {
    this.setState({
      SignupFormMes: {
        fname_msg: RequireVal(this.state.signupForm.firstName),
        email_msg: Email(this.state.signupForm.email),
        phone_msg: Phone(this.state.signupForm.phone),
        password_msg: Password(this.state.signupForm.password),
        cpassword_msg: ConformPassword(this.state.signupForm.password, this.state.signupForm.cpassword),
        checkterms_msg : CheckboxTrue(this.state.checkterms)
      }
    })
  }
  
  InputHandler(e) {
   this.state.signupForm[e.target.name] = e.target.value;
   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      signupForm: this.state.signupForm,
      checkterms : value
    });
    this.SignUpValid();
  }

  handeOnChange(value) {
    this.setState({
       phone: value
    });
 }

  handleClick(e) {

    e.preventDefault();
    this.SignUpValid();
    const { firstName, email, phone, password, cpassword } = this.state.signupForm;
    const { checkterms } = this.state;
    if (firstName && email && phone && password && cpassword && checkterms) {
      this.setState({
        error_msg: '',
        loading: true
      });
      signup(this.state.signupForm.email, this.state.signupForm.password).then(response => {
        register(this.state.signupForm).then(response => {
          if (response.result) {
            console.log(response.data.userDetails.id);
            this.setState({
              reg_error: '',
              userDetails: response.data.userDetails,
              userAccountDetails: response.data.accountDetails,
              userId:response.data.userDetails.id
            });
            this.setState({ 
              otpScreen: true,
              otpForm: {
                otp: '',
              }
            });
            this.setState({ loading: false });
            localStorage.setItem('step1', true);
          }else{
            this.setState({
              error_msg: response.message,
              loading : false
             });
          }
        });
      }).catch(err => {
        this.setState({
          error_msg: err.message,
          loading : false
        });
      })
    }
  }

  handleInputChangeOtpScreen(event) {
    this.state.otpForm[event.target.name] = event.target.value;
    this.setState({ otpForm: this.state.otpForm });
    console.log(this.stage)
    this.OtpValid();
  }
  OtpValid() {
    this.setState({
      OtpValidMes: {
        Otp_msg: Password(this.state.otpForm.otp)
      }
    })
  }
  checkOtp(e) {
    e.preventDefault();
    this.OtpValid();
    const { otp } = this.state.otpForm;
    console.log(otp);
    if (otp) {
        this.setState({
          error_msg: '',
          loading: true
        });
        validateOtp(this.state.otpForm.otp).then(response => {
        if(response.result){
          localStorage.setItem('isLogin', true);
          localStorage.setItem('userDetails', JSON.stringify(this.state.userDetails));
          localStorage.setItem('userAccountDetails', JSON.stringify(this.state.userAccountDetails));
          localStorage.setItem('step1', '');
          this.setState({ loading: false });
          this.props.history.push('/create-invoice');
        }else{
            this.setState({
              error_msg: response.message,
              loading : false
            });
        }
      });
    }
  }
  resendOtp() {
    let data = {
      email: this.state.signupForm.email,
      phone: this.state.signupForm.phone,
      userId: this.state.userId

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

    if (this.state.otpScreen || localStorage.getItem('step1')) {
      return (
        <div className="page_otp section_user">
          <p className="_title">STEP 2 - Enter OTP</p>
          <p>Please enter the OTP received though SMS to complete the sign up process</p>
          <input className="form-control input_enterotp" type="password" maxLength="6" placeholder="******" name="otp" onChange={this.handleInputChangeOtpScreen} />
          <p className="mes_error">{this.state.OtpValidMes.Otp_msg}</p>
          <p className="mes_error api_error">{this.state.error_msg}</p>
          <button type="submit" className={'btn btn-primary _mr15' + ((this.state.loading) ? 'btndisabled' : '') } onClick={this.checkOtp}>Confirm</button>
          <button type="submit" className="btn btn-primary" onClick={this.resendOtp.bind(this)}>Resend</button>
        </div>
      )
    } else {
      return (
        <div className="page_signup section_user">
          <p className="_title">Sign Up</p>
          <div className="form_user">
            <div className="form-group">
              <label>First Name</label>
              <input className="form-control" type="text" maxLength="25" name="firstName" value={this.state.firstName} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.fname_msg}</p>
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input className="form-control" type="text" maxLength="25" name="lastName" value={this.state.lastName} onChange={this.InputHandler} />
            </div>

            <div className="form-group">
              <label>Email Id</label>
              <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.email_msg}</p>
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <div className="row _mr0">
                <div className="col-md-3">
                    <input className="form-control" placeholder="+91" type="number" name="countrycode" value={this.state.phone} onChange={this.InputHandler} />
                </div>

                <input className="form-control col-md-9" type="number" name="phone" value={this.state.phone} onChange={this.InputHandler} />

              </div>


              <p className="mes_error">{this.state.SignupFormMes.phone_msg}</p>
            </div>

            <div className="line_diff"></div>

            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" maxLength="25" name="password" value={this.state.password} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.password_msg}</p>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input className="form-control" type="password" maxLength="25" name="cpassword" value={this.state.cpassword} onChange={this.InputHandler} />
              <p className="mes_error">{this.state.SignupFormMes.cpassword_msg}</p>
            </div>
            <div className="txt_terms">
              <label className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" name="checkterms" checked={this.state.isChecked} onChange={this.InputHandler} /><span className="custom-control-indicator"></span></label> By registering, you agree to our <Link to="/terms-of-service" target="_blank">Terms of Service</Link> and <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>.</div>
               <p className="mes_error">{this.state.SignupFormMes.checkterms_msg}</p>
               <p className="mes_error api_error">{this.state.error_msg}</p>
          </div>


          <div className="form_footerstyle">
            
            <div className="style_line justify-content-between l">
              <p className="txt">STEP 1</p>
              <div className="justify-content-between _line">
                <span className="active"></span>
                <span></span>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col align-middle"><Link to="/sign-in" className="txt_already">Already have an account?</Link></div>
              <div className="col text-right"><button type="submit" className={'btn btn-primary ' + ((this.state.loading) ? 'btndisabled' : '')}  onClick={this.handleClick}>Next ></button></div>
            </div>
            </div>
        </div>
      );
    }
  }
}
export default SignUp;