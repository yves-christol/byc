import React, { Component } from 'react';

// Shield component - represents a single svg shield
export default class Frame extends Component {
  render() {
    const shieldColor = colors[1];
    const frameColor = colors[0];
    return (
      <button onClick={() => props.onClick(this.props.frame)} style={{height: '60px', width: '60px'}}>
        <svg viewBox="-31 -31 62 68">
          <path d={shield} style={{fill: shieldColor.value, strokeWidth: '0'}} />
          <path d={this.props.frame.path}  style={{fill: frameColor.value}} />
          < path d={shield}
            style={{fill: 'transparent', stroke: shieldColor.comp, strokeWidth: '0.5'}}
          />
        </svg>
      </button>
    );
  }
}
