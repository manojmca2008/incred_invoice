import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ForgetPassword extends Component {
  render() {
    return (
      <div>
        <p className="_title">Create Your Password</p>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                <p className="mes_error"></p>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>

              <div className="form-check _mb30">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  Remember Me
  </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/sign-in" className="btn">Back</Link>
            </form>
          </div>
          <div className="col">
            <p><Link to="/sign-in">login</Link></p>
            <p>Not registered yet, Register Now</p>
            <p><Link to="/sign-up">Sign Up</Link></p>
          </div>

        </div>
      </div>

    );
  }
}

export default ForgetPassword;