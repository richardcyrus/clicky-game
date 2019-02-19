import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <main className="container game-container">{this.props.children}</main>
    );
  }
}

export default Container;
