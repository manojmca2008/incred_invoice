import React, { Component } from 'react';
class Declaration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliverynote: ''
    }
    this.InputHandler = this.InputHandler.bind(this);
  }
  InputHandler(e) {
    const value = e.target.value;
    this.setState({[value]: value});
  }
  render() {
    return (
      <div className="popup_invoice popup_declaration">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a>
        <p className="_title">Add/edit declaration/comments</p>
        <div className="container-fluid">
        
          <p className="text-right mes-required">
            
            <sup>*</sup>required field
          </p>
          <div className="space">
            <div className="row form-group  _mb30">
              <div className="col-md-4 text-md-right"> DECLARATION/COMMENTS<sup className="txt_req">*</sup></div>
              <div className="col-md-8">
              <textarea type="text" value={this.state.value} className="form-control" placeholder="We declare that this invoice shows the actual price of the services rendered and that all particulars are true and correct." name="deliverynote" onChange={this.InputHandler} /><p className="mes_error"></p>
              </div>
            </div>

            <div className="text-center"><a href="javascript:void(0)" className="btn btn-primary l">Save</a></div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Declaration;