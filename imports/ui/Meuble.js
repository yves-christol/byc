import React, { Component } from 'react';

// Shield component - represents a single svg shield
export default class Meuble extends Component {
  render() {
    const shieldColor = colors[1];
    const meubleColor = colors[0];
    return (
      <button onClick={() => props.onClick(this.props.meuble)} style={{height: '60px', width: '60px'}}>
        <svg viewBox="-31 -31 62 68">
          <path d={shield} style={{fill: shieldColor.value, strokeWidth: '0'}} />
          <path d={this.props.meuble.path}  style={{fill: meubleColor.value}} />
          < path d={shield}
            style={{fill: 'transparent', stroke: shieldColor.comp, strokeWidth: '0.5'}}
          />
        </svg>
      </button>
    );
  }
}
