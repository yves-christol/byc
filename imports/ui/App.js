import React, { Component } from 'react';

import FramePicker from './FramePicker.js';
import ColorPicker from './ColorPicker.js';
import MeublePicker from './MeublePicker.js';
import DispoPicker from './DispoPicker.js';
import Shield from './Shield.js';

// App component - represents the whole app
export default class App extends Component {
  renderShields() {
    return meubles.map((meuble, idx) => (
      <Shield key={idx.toString()} idx={idx} color={colors[Math.floor(Math.random() * colors.length)].value} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Blason Your Character</h1>
        </header>

        <ColorPicker />

        <FramePicker />

        <ColorPicker />

        <DispoPicker />

        <MeublePicker />

        <ColorPicker />

        <ul>
          {this.renderShields()}
        </ul>
      </div>
    );
  }
}
