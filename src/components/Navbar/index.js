import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    const correct = this.props.userMessage.correct;
    const incorrect = this.props.userMessage.incorrect;

    return (
      <nav className="navbar shadow-lg fixed-top navbar-expand-lg navbar-dark bg-primary">
        <a href="/" className="navbar-brand">
          Clicky Game
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav mx-auto">
            <span
              className={
                'navbar-text user-message' +
                (correct ? ' correct' : '') +
                (incorrect ? ' incorrect' : '')
              }
            >
              {this.props.userMessage.message}
            </span>
          </div>
          <div className="navbar-nav">
            <span className="navbar-text text-white">
              Score:&nbsp;{this.props.currentScore}&nbsp;|&nbsp;Top Score:&nbsp;
              {this.props.topScore}
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
