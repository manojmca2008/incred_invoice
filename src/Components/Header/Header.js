import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from 'firebase';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:false
    }
    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //    alert('signin');
    //    localStorage.setItem('isLogin',true);
    //     // User is signed in.
    //     //this.setState({ isLogin: true });
    //   } else {
    //     //alert('logout');
    //     // No user is signed in.
    //   }
    // });
  }
  componentWillMount(){
    //alert('asasas');
  }

  render() {
    return (
        <header className="_header">
          <div className="strip_red">
            <div className="container-fluid clearfix">
            <Link to="/create-invoice" className="brandlogo"><strong>INCRED</strong> INVOICES</Link>
            <ul className="nav nav-pills float-right">
              <li className="nav-item"><Link to="/create-invoice">Create Invoice</Link></li>
              <li className="nav-item"><Link to="/veiw-past-invoice">Veiw Past Invoice</Link></li>
              <li className="nav-item"><Link to="/track-payments-due">Track Payments Due</Link></li>
              <li className="nav-item"><Link to="/account-overview">Account Overview</Link></li>
              <li className="nav-item"><Link to="/record-expenses">Record Expenses</Link></li>
              <li className="nav-item"><Link to="/view-pass-expenses">View Pass Expenses</Link></li>
            </ul>
          </div>
        </div>
        <div className="strip_black">
          <div className="container-fluid">
            <div className="row">
              <div className="col">THE PROFESSIONAL GST INVOICING AND EXPENSE APPLICATION</div>
              <div className="col text-align-right">
                <Link to="/sign-in" className="link_signin">{localStorage.getItem('isLogin') ? "Sign Out" :"Sign In"}</Link>
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

    );
  }
}

export default Header;
