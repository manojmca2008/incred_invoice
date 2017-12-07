import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../Assets/Style/404.scss';

class PageNotFound extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="section_404">
          <div className="txt_404">
            <strong>404</strong>
            Page not Found
            </div>
            <Link to="/" className="btn btn-success">GO BACK</Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
