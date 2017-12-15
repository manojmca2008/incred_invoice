import React, { Component } from 'react';
class CompanyLogo extends Component {
  render() {
    return (
      <div className="popup_addlogo">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a> 
        <p className="_title">Add Your Logo</p>
        <div className="text-center space">
          <div className="frame_logo d-flex align-items-center justify-content-center">
            ADD LOGO
            <span className="i_add">+</span>
          </div>
          <p className="txt_upload">LOGO IS BEST UPLOADED AS A TRANSPARENT PNG IMAGE</p>
          <a href="javascript:void(0)" className="btn btn-primary l">Save</a>
        </div>
      </div>
    );
  }
}

export default CompanyLogo;