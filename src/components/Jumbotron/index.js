import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron text-center rounded-0">
        <div className="caption">
          <h1 className="game-title">
            Looney Tunes
            <small>
              <sup>&reg;</sup>
            </small>{' '}
            Clicky Game!
          </h1>
          <p className="instructions">
            Click on an image to earn points.
            <br /> Do not click on any single image more than once!
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
