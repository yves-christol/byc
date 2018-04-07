import React, { Component } from 'react';

import Meuble from './Meuble.js';

// App component - represents the whole app
export default class MeublePicker extends Component {
  renderMeubles() {
    return meubles.map((meuble, idx) => (
      <Meuble key={idx.toString()} meuble={meuble} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>Pick a meuble</h2>
        </header>

        <ul>
          {this.renderMeubles()}
        </ul>
      </div>
    );
  }
}
