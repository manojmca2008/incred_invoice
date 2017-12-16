import React, { Component } from 'react';
class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoicedate: ''
    }
    this.InputHandler = this.InputHandler.bind(this);
  }
  InputHandler(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div className="popup_invoice popup_date">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a>
        <p className="_title">Edit invoice date</p>
        <div className="container-fluid">
        
          <p className="text-right mes-required">
            
            <sup>*</sup>required field
          </p>
          <div className="space">
            <div className="row form-group align-items-center _mb30">
              <div className="col-md-4 text-md-right">Invoice date<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
                  <input type="number"  className="form-control" name="invoicedate" value={this.state.value} onChange={this.InputHandler} />
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

export default Date;