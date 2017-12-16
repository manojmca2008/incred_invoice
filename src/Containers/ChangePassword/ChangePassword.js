import React, { Component } from 'react';
import { resetPassword } from '../../Services/ApiServices';
import { Password, ConformPassword } from './../../Helpers/FormValidation';
import { Link } from 'react-router-dom';
import { updatePassword } from '../../Services/AuthServices';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCode: this.props.match.params.token,
      password: '',
      cpassword: ''
    }  
    console.log(this.props.match.params);
  }

  InputHandler(e) {
    let inputvalue = e.target.value;
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (e.target.name === 'password') {
      this.setState({
        password_errormes: Password(inputvalue)[0]
      });
    } else if (e.target.name === 'cpassword') {
      this.setState({
        cpassword_errormes: ConformPassword(this.state.password, inputvalue)[0]
      });
    }
  }
  FormValid() {
    this.setState({
      password_errormes: Password(this.state.password)[0],
      cpassword_errormes: ConformPassword(this.state.password, this.state.cpassword)[0]
    })
  }
  HandleClick(e) {
    e.preventDefault();
    this.FormValid();
    const { resetCode, password, cpassword } = this.state;
    if(Password(this.state.password)[1] || ConformPassword(this.state.password, this.state.cpassword)[1]){
      
      return false
    }else {
      this.setState({
        loading : true
      });
      let data = {
        password:password,
        resetCode:resetCode
      }
      resetPassword(data).then(response => {
          if(response.status){
            //updatePassword(password).then(response => {
              this.setState.loading = false;
              this.setState({
                'mes_thanksmes' : response.message,
                loading : false
              });
            /*}).catch(err => {
              this.setState({
                error_msg: err.message,
                loading: false
              });
            });*/
            //this.props.history.push('/create-invoice');
          }else{  
              this.setState({
                error_msg: response.message,
                loading : false
              });
          }
          console.log(this.state)
      });
    }
  }
  render() {   
    return (
      <div className="section_user">
        <div className={this.state.mes_thanksmes ? 'hide' : ''}>
          <p className="_title">Lost password</p>
          <div className="form_user">
          <div className="form-group">
            <label>New password</label>
            <input className="form-control" name="password" type="password"  onChange={this.InputHandler.bind(this)} />
            <p className="mes_error">{this.state.password_errormes}</p>
            </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input className="form-control" name="cpassword" type="password"  onChange={this.InputHandler.bind(this)} />
            <p className="mes_error">{this.state.cpassword_errormes}</p>
          </div>
          <p className="mes_error api_error">{this.state.error_msg}</p>
          <p className="text-center"><button type="submit" className={'btn btn-primary ' + ((this.state.loading) ? 'btndisabled' : '')} onClick={(e) => this.HandleClick(e)}>Reset Password</button></p>
          </div>
        </div>
        <div className={'text-center ' +  ((this.state.mes_thanksmes) ? '' : 'hide')}>
          <p className="_title">Thank you</p>
          <p className="mes_thanksmes">{ this.state.mes_thanksmes }</p>
          <Link to="/sign-in" className="btn btn-primary">Login</Link>
        </div>
        
      </div>
    );
  }
}

export default ChangePassword;