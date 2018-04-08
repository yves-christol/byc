import React, { Component } from 'react';
import Shield from './Shield.js';

// Shield component - represents a single svg shield
export default class Dispo extends Component {
  render() {
    return (
      <button onClick={() => props.onClick(this.props.frame)} style={{height: '60px', width: '60px'}}>
        <Shield
          shieldColor={colors[1]}
          frame={frames[0]}
          frameColor={colors[1]}
          dispo={this.props.dispo}
          firstMeuble={meubles[1]}
          firstColor={colors[0]}
          secondMeuble={meubles[1]}
          secondColor={colors[0]}
          thirdMeuble={meubles[1]}
          thirdColor={colors[0]}
        />
      </button>
    );
  }
}
