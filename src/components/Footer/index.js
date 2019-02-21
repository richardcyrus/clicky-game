import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <p>
            Looney Tunes<sup>&reg;</sup> Clicky Game!&nbsp;
            <img src={logo} className="react-logo" alt="React Logo" />
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
