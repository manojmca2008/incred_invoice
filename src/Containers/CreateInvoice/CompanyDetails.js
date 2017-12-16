import React, { Component } from 'react';
class CompanyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: '',
      companyaddress: '',
      phonenumber: '',
      customeremail: '',
      websitelink: '',
      gstno: '',
      panno: ''
    }
    this.InputHandler = this.InputHandler.bind(this);
  }
  InputHandler(e) {
    const value = e.target.value;
    this.setState({[value]: value});
  }
  render() {
    return (
      <div className="popup_companydetails popup_invoice">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a> 
        <p className="_title">Add/edit your details</p>
        <div className="container-fluid">
        
          <p className="text-right mes-required">
            
            <sup>*</sup>required field
          </p>
          <div className="space">
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Your (or company) name<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="companyname" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-5 text-md-right">Your (or company) address<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <textarea type="text" className="form-control" value={this.state.value} name="companyaddress" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Your phone number<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="number" className="form-control" value={this.state.value} name="phonenumber" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer email id<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" maxLength="100" value={this.state.value}  name="customeremail" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Your kalakar link or website link<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" maxLength="100" value={this.state.value} name="websitelink" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Your gst no<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" maxLength="15" value={this.state.value} name="gstno" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center _mb30">
              <div className="col-md-5 text-md-right">Your pan no<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" name="panno" value={this.state.value} maxLength="15" onChange={this.InputHandler} />
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

export default CompanyDetails;