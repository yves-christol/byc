import React, { Component } from 'react';

// Shield component - represents a single svg shield
export default class Shield extends Component {
  render() {
    let frameColor = colors[Math.floor(Math.random() * colors.length)];
    while (frameColor.value == this.props.color.value) {
      let frameColor = colors[Math.floor(Math.random() * colors.length)];
    }
    const dispo = dispos[Math.floor(Math.random() * dispos.length)];
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    const secondColor = colors[Math.floor(Math.random() * colors.length)];
    const thirdColor = colors[Math.floor(Math.random() * colors.length)];
    const frame = frames[Math.floor(Math.random() * frames.length)];
    const firstMeuble = meubles[Math.floor(Math.random() * meubles.length)];
    const secondMeuble = meubles[Math.floor(Math.random() * meubles.length)];
    const thirdMeuble = meubles[Math.floor(Math.random() * meubles.length)];
    return (
      <svg width="30%" viewBox="-31 -31 62 68">
        <path d={shield} style={{fill: this.props.color, strokeWidth: '0'}} />
        <path d={frame.path}  style={{fill: frameColor.value}} />
        <path d={firstMeuble.path}
          style={{fill: firstColor.value, stroke: firstColor.comp, strokeWidth: '0.5'}}
          transform={dispo.firstTransform}
        />
        { (dispo.secondTransform != '') ?
          <path d={secondMeuble.path}
            style={{fill: secondColor.value, stroke: secondColor.comp, strokeWidth: '0.5'}}
            transform={dispo.secondTransform}
          /> : <path d='' />
        }
        { (dispo.thirdTransform != '') ?
          <path d={thirdMeuble.path}
            style={{fill: thirdColor.value, stroke: thirdColor.comp, strokeWidth: '0.5'}}
            transform={dispo.thirdTransform}
          /> : <path d='' />
        }
        < path d={shield}
          style={{fill: 'transparent', stroke: '#000000', strokeWidth: '0.5'}}
        />
      </svg>
    );
  }
}
