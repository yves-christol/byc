import React, { Component } from 'react';

import Color from './Color.js';

// App component - represents the whole app
export default class ColorPicker extends Component {
  pickColor(event, color) {

  }

  renderColors() {
    return colors.map((color, idx) => (
      <Color key={idx.toString()} color={color} onClick='' />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>Pick a color</h2>
        </header>

        <ul>
          {this.renderColors()}
        </ul>
      </div>
    );
  }
}
