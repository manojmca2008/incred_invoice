import React, { Component } from 'react';
class ClientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientname: '',
      clientaddress: '',
      clientphonenumber: '',
      customeremail: '',
      websitelink: '',
      gstno: '',
      panno: '',
      aadharno: ''
    }
    this.InputHandler = this.InputHandler.bind(this);
  }
  InputHandler(e) {
    const value = e.target.value;
    this.setState({[value]: value});
  }
  render() {
    return (
      <div className="popup_clientdetails popup_invoice">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a>
        <p className="_title">Add/edit client details</p>
        <div className="container-fluid">
        
          <p className="text-right mes-required">
            
            <sup>*</sup>required field
          </p>
          <div className="space">
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer/client name<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="clientname" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-5 text-md-right">Customer address<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <textarea type="text" className="form-control" value={this.state.value} name="clientaddress" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer phone number<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="number" className="form-control" value={this.state.value} name="clientphonenumber" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer email id<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="customeremail" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer kalakar link or website link<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} maxLength="100" name="websitelink" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer pan no<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} name="panno" maxLength="15" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Customer gst no</div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} maxLength="15" name="gstno" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
              </div>
            </div>
            <div className="row form-group align-items-center _mb30">
              <div className="col-md-5 text-md-right">Customer aadhar no</div>
              <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} maxLength="15" name="aadharno" onChange={this.InputHandler} />
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

export default ClientDetails;