import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../Services/AuthServices';

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firebase_forget_error: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    
  }
  handleClick(e) {
    e.preventDefault();
    if (this.state.email === '') {
      this.setState({
        firebase_forget_error: 'Email is not empty!'
      });
    } else {
      forgotPassword(this.state.email).then(value => {
        this.setState({
          firebase_forget_error: 'A link has been sent to your mail for reset your password'
        });

      }).catch(err => {
        this.setState({
          firebase_forget_error: err.message
        });
      })
    }
  }
  handleGoBackClick(e) {
    window.location.reload('/');
  }
  render() {
    return (
      <div>
        <p className="_title">Oh no, You Forgot Your Password?</p>
        <div className="row">
          <div className="col">
          <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </div>
                <div className="error">
                    {this.state.firebase_forget_error}
                </div>
            <button type="submit" className="btn btn-primary" onClick={(event) => this.handleClick(event)}>Submit</button>
            <Link to="/sign-in" className="btn" onClick={(event) => this.handleGoBackClick(event)}>Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;