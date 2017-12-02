import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../Services/AuthServices';
import { register, validateOtp } from '../../Services/ApiServices';

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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChangeOtpScreen = this.handleInputChangeOtpScreen.bind(this);
    this.checkOtp = this.checkOtp.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    signup(this.state.signupForm.email, this.state.signupForm.password).then(response => {
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
    })
  }
  handleInputChange(event) {
    this.state.signupForm[event.target.name] = event.target.value;
    this.setState({ signupForm: this.state.signupForm });
  }
  handleInputChangeOtpScreen(event) {
    this.state.otpForm[event.target.name] = event.target.value;
    this.setState({ otpForm: this.state.otpForm });
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
        <div>
          <p className="_title">Sign Up</p>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>First Name</label>
                <input className="form-control" placeholder="" name="fname" value={this.state.fname} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input className="form-control" placeholder="" name="lname" value={this.state.lname} onChange={this.handleInputChange} />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                <p className="mes_error"></p>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input className="form-control" placeholder="" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Password" name="cpassword" value={this.state.cpassword} onChange={this.handleInputChange} />
              </div>

              <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
            <div className="col">
              <p><Link to="/sign-in">{this.state.error_msg}login</Link></p>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default SignUp;