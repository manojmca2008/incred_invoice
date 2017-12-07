import React, { Component } from 'react';

class CreateInvoice extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex align-items-center title_invoice">
            <p className="_title">CREATE INVOICE</p>
            <p className="ml-auto">
              <a href="javascript:void(0)" className="btn btn-primary">CREATE pro forma</a>
            </p>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="field_box d-flex align-items-center ac _m0 data">COMPANY<br />LOGO</div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="field_box d-flex _m0">Invoice Number</div>
                    </div>
                    <div className="col-md-4">
                      <div className="field_box d-flex _m0">DATE</div>
                    </div>
                  </div>
                  <div className="field_box d-flex multiline align-items-center">YOUR/COMPANY DETAILS</div>
                </div>
                <div className="col-md-3">
                  <div className="field_box d-flex align-items-center ac _m0">Delivery<br />Note</div>
                </div>
              </div>
              <div className="field_box d-flex multiline align-items-center">YOUR/COMPANY DETAILS</div>
            </div>
          </div>
          <div className="field_box d-flex multiline align-items-center">+ Add Item</div>
          <div className="row">
            <div className="col">
               <div className="field_box d-flex align-items-center ac  data">declaration</div>
            </div>
            <div className="col">
              <div className="field_box d-flex align-items-center ac  data">bank account details</div>
            </div>
            <div className="col">
              <div className="field_box d-flex align-items-center ac  data">signature</div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      </div>
    );
  }
}

export default CreateInvoice;