import React, { Component } from 'react';
class CustomComponent extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    var ComponentName = this.props.componentname;
    return <ComponentName />;
  }
}
export default CustomComponent;