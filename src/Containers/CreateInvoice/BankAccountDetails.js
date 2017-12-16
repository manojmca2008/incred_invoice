import React, { Component } from 'react';
class BankAccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beneficiaryname: '',
      bankname: '',
      bankaccountno: '',
      bankifsccode: '',
      branchlocation: ''
    }
    this.InputHandler = this.InputHandler.bind(this);
  }
  InputHandler(e) {
    const value = e.target.value;
    this.setState({[value]: value});
  }
  render() {
    return (
      <div className="popup_bankaccountdetails popup_invoice">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a> 
        <p className="_title"> ADD/EDIT Bank Account DETAILS</p>
        <div className="container-fluid">
        
          <p className="text-right mes-required">
            
            <sup>*</sup>required field
          </p>
          <div className="space">
            <div className="row form-group align-items-center">
              <div className="col-md-4 text-md-right">Beneficiary name<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="beneficiaryname" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-4 text-md-right">Bank name<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
                  <input type="text" className="form-control" value={this.state.value} name="bankname" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-4 text-md-right">Bank account no<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
                  <input type="text" className="form-control" value={this.state.value} name="bankaccountno" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-4 text-md-right">Bank ifsc code<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="bankifsccode" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center _mb30">
              <div className="col-md-4 text-md-right">Bank branch/location<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="branchlocation" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>

            <div className="text-center"><a href="javascript:void(0)" className="btn btn-primary l">Save</a></div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default BankAccountDetails;