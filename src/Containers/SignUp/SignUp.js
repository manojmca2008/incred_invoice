import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SignUp extends Component {
  render() {   
    return (
      <div>
      <p className="_title">Sign Up</p>
      <div className="row">
        <div className="col">
          <form>
          <div className="form-group">
              <label>First Name</label>
              <input className="form-control" placeholder="" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input className="form-control" placeholder="" />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              <p className="mes_error"></p>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input className="form-control" placeholder="" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col">
          <p><Link to="/sign-in">login</Link></p>
        </div>

      </div>
    </div>
    );
  }
}

export default SignUp;