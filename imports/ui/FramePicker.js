import React, { Component } from 'react';

import Frame from './Frame.js';

// App component - represents the whole app
export default class FramePicker extends Component {
  renderFrames() {
    return frames.map((frame, idx) => (
      <Frame key={idx.toString()} frame={frame} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>Pick a frame</h2>
        </header>

        <ul>
          {this.renderFrames()}
        </ul>
      </div>
    );
  }
}
