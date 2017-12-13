import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Email } from './../../Helpers/FormValidation';
import { RESETTHANKYOU_VALId } from './../../Constant/Messages';
import { forgotPassword} from '../../Services/ApiServices';
import firebase from 'firebase';

class ForgetPassword extends Component {
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
      email: '', 
      loading: false
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
    if (Email(this.state.email)[1]) {
      this.setState({
        email_errormes: Email(this.state.email)[0]
      });
      return false;
    } else {
      this.setState({
        loading : true
      });
      let data = {
        email: this.state.email,
      }
      forgotPassword(data).then(response => {
        console.log(response);
        if(response.result){
          this.setState({
            loading : false
          });
        }else{
            this.setState({
              email_errormes: response,
              loading : false
            });
        }
      });
      // forgotPassword(this.state.email).then(value => {
      //   this.setState({
      //     email_thanksmes: RESETTHANKYOU_VALId
      //   });
      // }).catch(err => {
      //   this.setState({
      //     email_errormes: err.message
      //   });
      // })
    } 
  }
  render() {
    return (
      <div className="section_user">
        <p className="_title">Lost password</p>
        <div className="form_user">
        <p className="mes_thanksmes">{this.state.email_thanksmes}</p>
        <div className="form-group">
          <label>Email</label>
          <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.InputHandler} />
          <p className="mes_error">{this.state.email_errormes}</p>
        </div>
        <p className="text-center"><button type="submit" className={'btn btn-primary ' + ((this.state.loading) ? 'btndisabled' : '')} onClick={(e) => this.HandleClick(e)}>Submit</button></p>
        </div>
        <div className="section_btnpassword">
          <p><Link to="/sign-in" className="btn btn-success">login</Link>  <Link to="/register" className="btn btn-success">Sign Up</Link></p>
        </div>
      </div>
    );
  }
}
export default ForgetPassword;