import React, { Component } from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import Color from './Color.js';
import { getColors } from './shield/colors.js';

export default class ColorPicker extends Picker {
  renderList() {
    return getColors().map((color, idx) => (
      <Color
        key={color[0]}
        color={color[0]}
        onClick={this.pick}
        selected={color[0] === this.props.selected}
      />
    ));
  }
}
