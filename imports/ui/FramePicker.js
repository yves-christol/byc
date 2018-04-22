import React, { Component } from 'react';

import Picker from './Picker.js';
import Frame from './Frame.js';
import { getFrames } from './shield/frames.js';

// App component - represents the whole app
export default class FramePicker extends Picker {
  renderList() {
    return getFrames().map((frame, idx) => (
      <Frame
        key={frame[0]}
        frame={frame[0]}
        onClick={this.pick}
        selected={frame[0] === this.props.selected}
      />
    ));
  }
}
