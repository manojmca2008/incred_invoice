import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../Services/AuthServices';
import { Email } from './../../Helpers/FormValidation';
import { RESETTHANKYOU_VALId } from './../../Constant/Messages';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.InputHandler = this.InputHandler.bind(this);
  }

  InputHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      email_errormes: Email(e.target.value),
      email_thanksmes: ''
    });
  }
  HandleClick(e) {
    e.preventDefault();
    let hasError = Email(this.state.email);
    if (hasError) {
      this.setState({
        email_errormes: Email(this.state.email)
      });
      return false;
    } else {
      forgotPassword(this.state.email).then(value => {
        this.setState({
          email_thanksmes: RESETTHANKYOU_VALId
        });
      }).catch(err => {
        this.setState({
          email_errormes: err.message
        });
      })
    }
  }
  render() {
    return (
      <div className="section_user">
        <p className="_title">Forgot password</p>
        <p className="mes_thanksmes">{this.state.email_thanksmes}</p>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.InputHandler} />
          <p className="mes_error">{this.state.email_errormes}</p>
        </div>
        <button type="submit" className="btn btn-primary btn_100" onClick={(e) => this.HandleClick(e)}>Submit</button>
        <div className="section_btnpassword">
          <p><Link to="/sign-in" className="btn btn-success">login</Link>  <Link to="/sign-up" className="btn btn-success">Sign Up</Link></p>
        </div>
      </div>
    );
  }
}
export default ForgetPassword;