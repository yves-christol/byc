import React, { Component } from 'react';

import Dispo from './Dispo.js';

// App component - represents the whole app
export default class DispoPicker extends Component {
  renderDispos() {
    return dispos.map((dispo, idx) => (
      <Dispo key={idx.toString()} dispo={dispo} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>Pick a dispo</h2>
        </header>

        <ul>
          {this.renderDispos()}
        </ul>
      </div>
    );
  }
}
