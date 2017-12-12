import React, { Component } from 'react';
import { resetPassword } from '../../Services/ApiServices';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCode: this.props.match.params.token
    }  
  }

  InputHandler(e) {
    alert('sasaa');
  }
  HandleClick(e) {
    alert('sasaa');
    e.preventDefault();
    const { resetCode,password } = this.state;
    if (resetCode && password) {
      let data = {
        password:password,
        resetCode:resetCode
      }
      resetPassword(data).then(response => {
          if(response.result){
            //this.props.history.push('/create-invoice');
            this.setState.loading = false
          }else{
              this.setState({
                error_msg: response.message,
                loading : false
              });
              console.log(response.message, response);
          }
      });
    }
  }
  render() {   
    return (
      <div className="section_user">
        <p className="_title">Lost password</p>
        <div className="form_user">
        <p className="mes_thanksmes"></p>
        
        <div className="form-group">
          <label>New password</label>
          <input className="form-control" name="password" type="password"  onChange={this.InputHandler.bind(this)} />
          <p className="mes_error"></p>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input className="form-control" name="cpassword" type="password"  onChange={this.InputHandler.bind(this)} />
          <p className="mes_error"></p>
        </div>

        
        <p className="text-center"><button type="submit" className="btn btn-primary" onClick={(e) => this.HandleClick(e)}>Reset Password</button></p>
        </div>
      </div>
    );
  }
}

export default ChangePassword;