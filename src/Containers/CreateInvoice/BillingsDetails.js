import React, { Component } from 'react';
class BillingsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sacCode: '',
      descriptionofservice: '',
      noofdays: '',
      rateperdays: '',
      cgst: '',
      sgst: '',
      igst: ''

    }
    this.InputHandler = this.InputHandler.bind(this);
  }
  InputHandler(e) {
    const value = e.target.value;
    this.setState({ [value]: value });
  }
  render() {
    return (
      <div className="popup_billitemdetails popup_invoice">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a>
        <p className="_title">Add/edit bill item details</p>
        <div className="space">
        <div className="container-fluid">
          <p className="text-right mes-required">
            <sup>*</sup>required field
          </p>
          <div className="space">
            <div className="row form-group align-items-center txt_taxradio">
              <div className="col-md-5 text-md-right">TAX APPLICABLE<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
                <div className = "align-items-center">
                  <label className="custom-control custom-radio">
                    <input name="taxApplicable" type="radio" class="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">Nri Non Resident</span>
                  </label>
                  <label className="custom-control custom-radio">
                    <input name="taxApplicable" type="radio" class="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">GST</span>
                  </label>
                  <label className="custom-control custom-radio">
                    <input name="taxApplicable" type="radio" class="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">IGST</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">Hsn/SacCode<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
              <input type="number" className="form-control" value={this.state.value} name="sacCode" onChange={this.InputHandler} />
              <p className="mes_error"></p>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-5 text-md-right">Description Of Service/goods<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
              <textarea type="text" className="form-control" name="descriptionofservice" value={this.state.value} onChange={this.InputHandler}  />
              <p className="mes_error"></p>
              </div>
            </div>  

            <div className="row">

              <div className="col col-md-12">
                <div className="row form-group align-items-center">
                  <div className="col-md-5 text-md-right">SGST<i className="txt_gstsub">(e.g. 12% )</i></div>
                  <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} name="sgst" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
                  </div>
                </div>
              </div>
              
              <div className="col col-md-12">
                <div className="row form-group align-items-center">
                  <div className="col-md-5 text-md-right">CGST<i className="txt_gstsub">(e.g. 12% )</i></div>
                  <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} name="cgst" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
                  </div>
                </div>
              </div>

              <div className="col col-md-12">
                <div className="row form-group align-items-center">
                  <div className="col-md-5 text-md-right">IGST<i className="txt_gstsub">(e.g. 12% )</i></div>
                  <div className="col-md-7">
                  <input type="text" className="form-control" value={this.state.value} name="icgst" onChange={this.InputHandler} />
                  <p className="mes_error"></p>
                  </div>
                </div>
              </div>

            </div>

            <div className="row form-group align-items-center">
              <div className="col-md-5 text-md-right">No Of Days/units/shifts<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
              <input type="text" className="form-control" value={this.state.value} name="noofdays" onChange={this.InputHandler} />
              <p className="mes_error"></p>
              </div>
            </div>

            <div className="row form-group align-items-center _mb30">
              <div className="col-md-5 text-md-right">Rate Per Day/unit/shift<sup className="txt_req">*</sup></div>
              <div className="col-md-7">
              <input type="text" className="form-control" value={this.state.value} name="rateperdays" onChange={this.InputHandler} />
              <p className="mes_error"></p>
              </div>
            </div>

            <div className="text-center"><a href="javascript:void(0)" className="btn btn-primary l">Save</a></div>
            
            </div>
          </div>
        </div>
        </div>
        );
  }
}

export default BillingsDetails;