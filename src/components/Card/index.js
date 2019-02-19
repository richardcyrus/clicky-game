import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    // The only way that worked to set a background image in an inline style.
    let image = {
      backgroundImage: `url(${this.props.image})`
    };

    return (
      <div
        className="card shadow rounded-0 click-item"
        onClick={() => this.props.handleClick(this.props.id)}
      >
        <div className="img-container" style={image} />
      </div>
    );
  }
}

export default Card;
