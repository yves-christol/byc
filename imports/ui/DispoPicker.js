import React, { Component } from 'react';

import Picker from './Picker.js';
import Dispo from './Dispo.js';
import { getDispos } from './shield/dispos.js';

// App component - represents the whole app
export default class DispoPicker extends Picker {
  renderList() {
    return getDispos().map((dispo, idx) => (
      <Dispo
        key={dispo[0]}
        dispo={dispo[0]}
        onClick={this.pick}
        selected={dispo[0] === this.props.selected}
      />
    ));
  }
}
