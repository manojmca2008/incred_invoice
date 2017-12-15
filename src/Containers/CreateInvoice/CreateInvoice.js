import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

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
    this.state= {
      PopupData : '',
      isModalOpen: false
    }
  }

  openModal(e){
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
        <div className="col-md-8">
          <div className="d-flex align-items-center title_invoice">
            <p className="_title">CREATE INVOICE</p>
            <p className="ml-auto">
              <a href="javascript:void(0)" className="btn btn-primary">CREATE pro forma</a>
            </p>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="field_box d-flex align-items-center ac _m0 data" data-detail="CompanyLogo" onClick = {this.openModal}>COMPANY<br />LOGO</div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="field_box d-flex _m0" data-detail="InvoiceNumber" onClick = {this.openModal}>Invoice Number</div>
                    </div>
                    <div className="col-md-4">
                      <div className="field_box d-flex _m0" data-detail="Date" onClick = {this.openModal}>DATE</div>
                    </div>
                  </div>
                  <div className="field_box d-flex multiline align-items-center" data-detail="CompanyDetails" onClick = {this.openModal}>YOUR/COMPANY DETAILS</div>
                </div>
                <div className="col-md-3">
                  <div className="field_box d-flex align-items-center ac _m0" data-detail="DeliveryNote" onClick = {this.openModal}>Delivery<br />Note</div>
                </div>
              </div>
              <div className="field_box d-flex multiline align-items-center" data-detail="ClientDetails" onClick = {this.openModal}>YOUR/Client DETAILS</div>
            </div>
          </div>
          <div className="field_box d-flex multiline align-items-center" data-detail="BillingsDetails" onClick = {this.openModal}>+ Add Item</div>
          <div className="row">
            <div className="col">
               <div className="field_box d-flex align-items-center ac  data" data-detail="Declaration" onClick = {this.openModal}>declaration</div>
            </div>
            <div className="col">
              <div className="field_box d-flex align-items-center ac  data" data-detail="BankAccountDetails" onClick = {this.openModal}>bank account details</div>
            </div>
            <div className="col">
              <div className="field_box d-flex align-items-center ac  data" data-detail="Signature" onClick = {this.openModal}>signature</div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>

      <Popup isOpen={this.state.isModalOpen}>
        <a href="javascript:void(0)" className="popup_close" onClick={this.closeModal.bind(this)}>+</a>
        { this.state.PopupData }
      </Popup>

      </div>
    );
  }
}


export default CreateInvoice;