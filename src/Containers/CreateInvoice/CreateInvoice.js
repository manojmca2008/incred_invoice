import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Popup from "./../../Components/Popup/Popup";

import './../../Assets/Style/InvoiceSubsection.scss';

import CompanyLogo from "./CompanyLogo";
import CompanyDetails from "./CompanyDetails";
import Date from "./Date";
import InvoiceNumber from "./InvoiceNumber";
import DeliveryNote from "./DeliveryNote";
import ClientDetails from "./ClientDetails";
import BillingsDetails from "./BillingsDetails";
import Declaration from "./Declaration";
import BankAccountDetails from "./BankAccountDetails";
import Signature from "./Signature";


class CreateInvoice extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {
      PopupData: '',
      isModalOpen: false
    }
  }

  openModal(e) {
    //let a = <PopupContent />
    this.setState({
      isModalOpen: true
    });
    switch (e.currentTarget.dataset.detail) {
      case 'CompanyLogo':
        this.setState({
          PopupData: < CompanyLogo />
        })
        break;

      case 'Date':
        this.setState({
          PopupData: < Date />
        })
        break;

      case 'CompanyDetails':
        this.setState({
          PopupData: < CompanyDetails />
        })
        break;

      case 'InvoiceNumber':
        this.setState({
          PopupData: < InvoiceNumber />
        })
        break;

      case 'DeliveryNote':
        this.setState({
          PopupData: < DeliveryNote />
        })
        break;

      case 'ClientDetails':
        this.setState({
          PopupData: < ClientDetails />
        })
        break;

      case 'BillingsDetails':
        this.setState({
          PopupData: < BillingsDetails />
        })
        break;

      case 'Declaration':
        this.setState({
          PopupData: < Declaration />
        })
        break;

      case 'BankAccountDetails':
        this.setState({
          PopupData: < BankAccountDetails />
        })
        break;

      case 'Signature':
        this.setState({
          PopupData: < Signature />
        })
        break;
      default:
    }
  }

  closeModal() {
    //e.preventDefault();
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="d-flex align-items-center title_invoice">
              <p className="_title">CREATE INVOICE</p>
              <p className="ml-auto">
                <a href="javascript:void(0)" className="btn btn-primary">CREATE pro forma</a>
              </p>
            </div>
            <div className="row">
              <div className="col-md-3 col-xs-3">
                <div className="field_box d-flex align-items-center ac _m0 data" data-detail="CompanyLogo" onClick={this.openModal}>COMPANY<br />LOGO</div>
              </div>
              <div className="col pl-md-0">
                <div className="row">
                  <div className="col pr-md-0">
                    <div className="row">
                      <div className="col pr-md-0">
                        <div className="field_box d-flex _m0" data-detail="InvoiceNumber" onClick={this.openModal}>Invoice Number</div>
                      </div>
                      <div className="col-md-4">
                        <div className="field_box d-flex _m0" data-detail="Date" onClick={this.openModal}>DATE</div>
                      </div>
                    </div>
                    <div className="field_box d-flex multiline align-items-center" data-detail="CompanyDetails" onClick={this.openModal}>YOUR/COMPANY DETAILS</div>
                  </div>
                  <div className="col-md-4">
                    <div className="field_box d-flex align-items-center ac _m0" data-detail="DeliveryNote" onClick={this.openModal}>Delivery<br />Note</div>
                  </div>
                </div>
                <div className="field_box d-flex multiline align-items-center" data-detail="ClientDetails" onClick={this.openModal}>CLIENT/CUSTOMER DETAILS</div>
              </div>
            </div>
            <div className="field_box d-flex multiline align-items-center" data-detail="BillingsDetails" onClick={this.openModal}>+ Add Item</div>

            <div className="itemtable">
              <div className="headitemtable">
                <div className="row">
                  <div className="col-md-1">S.No.</div>
                  <div className="col-md-3">ITEM DESCRIPTION</div>
                  <div className="col">HSN/SAC</div>
                  <div className="col text-center">GST</div>

                  <div className="col text-center">IGST</div>
                  <div className="col text-center">QTY</div>
                  <div className="col">RATE</div>
                  <div className="col text-right"><strong>AMOUNT</strong></div>
                </div>
              </div>
              <div className="bodyitemtable">
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
                <div className="row" data-detail="BillingsDetails" onClick={this.openModal}>
                  <div className="col-md-1">1</div>
                  <div className="col-md-3">Photography Services</div>
                  <div className="col">6554449</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">9%<br />2,004</div>
                  <div className="col text-center">2</div>
                  <div className="col">24,000</div>
                  <div className="col text-right">48,000<br />4,008</div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col">
                <div className="field_box d-flex align-items-center ac  data" data-detail="Declaration" onClick={this.openModal}>declaration</div>
              </div>
              <div className="col">
                <div className="field_box d-flex align-items-center ac  data" data-detail="BankAccountDetails" onClick={this.openModal}>bank account details</div>
              </div>
              <div className="col">
                <div className="field_box d-flex align-items-center ac  data" data-detail="Signature" onClick={this.openModal}>signature</div>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="invoice_pdfview">
              <table>
                <tr>
                  <td>
                    <table>
                      <tr>
                        <td width="50%" valign="top">
                          <table>
                            <tr>
                              <td width="30%"  valign="middle">
                                Company Logo
                              </td>
                              <td>
                                <strong>YOUR (OR COMPANY) NAME</strong>
                                <p>Your (or company) address</p>
                                <p>GST No: ASEDRPFD50</p> 
                                <p>Contact: 9869859696</p>
                                <p>E-Mail: arpit@incred.pro</p>
                                <p>www.incred.pro</p>
                              </td> 
                            </tr>
                          </table>
                          <div>
                                <strong>CUSTOMER/CLIENT NAME</strong>
                                <p>Customer address</p>
                                <p>GST No: ASEDRPFD50</p> 
                                <p>PAN No: ASEDRPFD50</p> 
                                <p>AADHAR No: ASEDRPFD50</p> 
                                <p>Contact: 9869859696</p>
                                <p>E-Mail: arpit@incred.pro</p>
                                <p>www.incred.pro</p>
                          </div>
                        </td>
                        <td valign="top">
                          <table>
                            <tr>
                              <td>Invoice number<strong>21</strong></td>
                              <td>Date<strong>01/01/2017</strong></td>
                            </tr>
                            <tr>
                              <td>Delivery note<strong>aaaaa</strong></td>
                              <td>Mode/Terms of Payment<strong>Cash</strong></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="footer_invoice">
          <div className="row">
            <div className="col-md-7">
              <div className="text-center invoice-bution">
                <a href="javascript:void(0)" className="btn btn-primary l">Preview</a>
                <a href="javascript:void(0)" className="btn btn-primary l">save draft</a>
                <a href="javascript:void(0)" className="btn btn-primary l">generate  invoice</a>
              </div>
            </div>
            <div className="col">

            </div>
          </div>
        </div>

        <Popup isOpen={this.state.isModalOpen}>
          <a href="javascript:void(0)" className="popup_close" onClick={this.closeModal.bind(this)}>+</a>
          {this.state.PopupData}
        </Popup>

      </div>
    );
  }
}


export default CreateInvoice;