import React, { Component } from 'react';
import './../../Assets/Style/Popup.scss';
class Popup extends Component {
  constructor(props) {
    super(props);
    this.popupClose = this.popupClose.bind(this);
    this.state = {
      popupClose: ''
    }
    console.log(this.props);
  }
  popupClose() {
    this.props({
      children : ''
    });
    this.setState({
      popupClose: !this.state.popupClose ? 'hide' : ''
    })
  }
  
  render() {
    if(this.props.isOpen){
        return (
          <div className='popup'>
            <div className="popup_dialog">
              <div className="">{this.props.children}</div>
            </div>
          </div>
        );
    } else {
        return (
          <div></div>
        );
    }
  }
}
export default Popup;