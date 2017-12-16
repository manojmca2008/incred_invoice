import React, { Component } from 'react';
class CompanyLogo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: ''
    };

    this.InputHandler = this.InputHandler.bind(this);

  }

  InputHandler(e) {
    const files = e.target.files;
    console.log(files[0].name);
  }

  render() {
    return (
      <div className="popup_addlogo">
        <a href="javascript:void(0)" className="btn btn_clearfield">clear field</a> 
        <p className="_title">Add Your Logo</p>
        <div className="text-center space">
          <div className="frame_logo d-flex align-items-center justify-content-center">
            ADD LOGO
            <div className="i_add">
              <span className="btn_upload">+
              <input type="file" name="files" className="file-input" value={this.state.value} onChange={this.InputHandler} />
              
              </span>
            </div>
          </div>
          <p className="txt_upload">LOGO IS BEST UPLOADED AS A TRANSPARENT PNG IMAGE</p>
          <a href="javascript:void(0)" className="btn btn-primary l">Save</a>
        </div>
      </div>
    );
  }
}

export default CompanyLogo;