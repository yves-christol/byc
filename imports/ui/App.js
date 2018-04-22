import React, { Component } from 'react';

import FramePicker from './FramePicker.js';
import ColorPicker from './ColorPicker.js';
import MeublePicker from './MeublePicker.js';
import DispoPicker from './DispoPicker.js';
import Shield from './Shield.js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = Shield.getRandomShield();
    this.pick = this.pick.bind(this);
  }

  pick(attribute, value) {
    this.setState({[attribute]: value});
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Blason Your Character</h1>
        </header>
        <div className="row">
          <div className="column">
            <Shield
              shieldColor={this.state.shieldColor}
              frame={this.state.frame}
              frameColor={this.state.frameColor}
              dispo={this.state.dispo}
              first={this.state.first}
              firstColor={this.state.firstColor}
              second={this.state.second}
              secondColor={this.state.secondColor}
              third={this.state.third}
              thirdColor={this.state.thirdColor}
            />
          </div>
          <div className="column">
            <h2> Main color </h2>
            <ColorPicker
              selected={this.state.shieldColor}
              action={this.pick}
              attribute='shieldColor'
            />
          </div>
          <div className="column">
            <DispoPicker
              selected={this.state.dispo}
              action={this.pick}
              attribute='dispo'
            />
          </div>
          <header>
            <h2> Frame </h2>
          </header>
          <FramePicker
            selected={this.state.frame}
            action={this.pick}
            attribute='frame'
          />
          <ColorPicker
            selected={this.state.frameColor}
            action={this.pick}
            attribute='frameColor'
          />
          <MeublePicker
            selected={this.state.first}
            action={this.pick}
            attribute='first'
          />
          <ColorPicker
            selected={this.state.firstColor}
            action={this.pick}
            attribute='firstColor'
          />
          <MeublePicker
            selected={this.state.second}
            action={this.pick}
            attribute='second'
          />
          <ColorPicker
            selected={this.state.secondColor}
            action={this.pick}
            attribute='secondColor'
          />
          <MeublePicker
            selected={this.state.third}
            action={this.pick}
            attribute='third'
          />
          <ColorPicker
            selected={this.state.thirdColor}
            action={this.pick}
            attribute='thirdColor'
          />
        </div>
      </div>
    );
  }
}
