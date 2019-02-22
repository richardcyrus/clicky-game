import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand navbar-dark">
        <a href="/" className="navbar-brand">
          Clicky Game
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav mx-auto">
            <span
              onAnimationEnd={() => this.props.onNavbarAnimationEnd()}
              className={
                'navbar-text user-message' +
                (this.props.flash ? ` ${this.props.flash}` : '')
              }
            >
              {this.props.message}
            </span>
          </div>
          <div className="navbar-nav">
            <span className="navbar-text text-white">
              Score:&nbsp;{this.props.currentScore}&nbsp;| Top&nbsp;Score:&nbsp;
              {this.props.topScore}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
