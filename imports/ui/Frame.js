import React, { Component } from 'react';
import Shield from './Shield.js';

// Shield component - represents a single svg shield
export default class Frame extends Component {
  render() {
    return (
      <button onClick={() => props.onClick(this.props.frame)} style={{height: '60px', width: '60px'}}>
        <Shield
          shieldColor={colors[1]}
          frame={this.props.frame}
          frameColor={colors[0]}
          dispo={dispos[0]}
          firstMeuble={meubles[0]}
          firstColor={colors[0]}
          secondMeuble={meubles[0]}
          secondColor={colors[0]}
          thirdMeuble={meubles[0]}
          thirdColor={colors[0]}
        />
      </button>
    );
  }
}
