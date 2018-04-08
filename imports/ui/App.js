import React, { Component } from 'react';

import FramePicker from './FramePicker.js';
import ColorPicker from './ColorPicker.js';
import MeublePicker from './MeublePicker.js';
import DispoPicker from './DispoPicker.js';
import Shield from './Shield.js';

// App component - represents the whole app
export default class App extends Component {
  renderShields() {
    const shieldColor = colors[Math.floor(Math.random() * colors.length)];
    let frameColor = colors[Math.floor(Math.random() * colors.length)];
    while (frameColor.value == shieldColor.value) {
      let frameColor = colors[Math.floor(Math.random() * colors.length)];
    }
    const dispo = dispos[Math.floor(Math.random() * dispos.length)];
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    const secondColor = colors[Math.floor(Math.random() * colors.length)];
    const thirdColor = colors[Math.floor(Math.random() * colors.length)];
    const frame = frames[Math.floor(Math.random() * frames.length)];
    const firstMeuble = meubles[Math.floor(Math.random() * meubles.length)];
    const secondMeuble = meubles[Math.floor(Math.random() * meubles.length)];
    const thirdMeuble = meubles[Math.floor(Math.random() * meubles.length)];
    return ( <div width="30%">
      <Shield
        shieldColor={shieldColor}
        frame={frame}
        frameColor={frameColor}
        dispo={dispo}
        firstMeuble={firstMeuble}
        firstColor={firstColor}
        secondMeuble={secondMeuble}
        secondColor={secondColor}
        thirdMeuble={thirdMeuble}
        thirdColor={thirdColor}
     /> </div>);
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
