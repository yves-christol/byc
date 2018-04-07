import React, { Component } from 'react';

// Shield component - represents a single svg shield
export default class Color extends Component {
  render() {
    return (
      <button onClick={() => props.onClick(this.props.color)} style={{height: '60px', width: '60px'}}>
        <svg viewBox="-31 -31 62 68">
          <path d={shield} style={{fill: this.props.color.value, strokeWidth: '0'}} />
          < path d={shield}
            style={{fill: 'transparent', stroke: '#000', strokeWidth: '0.5'}}
          />
        </svg>
      </button>
    );
  }
}
