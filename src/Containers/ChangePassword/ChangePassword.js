import React, { Component } from 'react';


class ChangePassword extends Component {
  constructor(props) {
    super(props);
    let self = this;
    console.log(this.props.match.params.token);
    
  }

  InputHandler(e) {
    
  }
  HandleClick(e) {
    //e.preventDefault();
    
  }
  render() {   
    return (
      <div className="section_user">
        <p className="_title">Lost password</p>
        <div className="form_user">
        <p className="mes_thanksmes"></p>
        
        <div className="form-group">
          <label>New password</label>
          <input className="form-control" name="" type="password"  onChange={this.InputHandler} />
          <p className="mes_error"></p>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input className="form-control" name="" type="password"  onChange={this.InputHandler} />
          <p className="mes_error"></p>
        </div>

        
        <p className="text-center"><button type="submit" className="btn btn-primary" onClick={(e) => this.HandleClick(e)}>Reset Password</button></p>
        </div>
      </div>
    );
  }
}

export default ChangePassword;