import React, { Component } from 'react';

import Picker from './Picker.js';
import Meuble from './Meuble.js';
import { getMeubles } from './shield/meubles.js';

export default class MeublePicker extends Picker {
  renderList() {
    return getMeubles().map((meuble, idx) => (
      <Meuble
        key={meuble[0]}
        meuble={meuble[0]}
        onClick={this.pick}
        selected={meuble[0] === this.props.selected}
      />
    ));
  }
}
