import React, { Component } from 'react';

// Shield component - represents a single svg shield
export default class Dispo extends Component {
  render() {
    const shieldColor = colors[1];
    const dispoColor = colors[0];
    const dispo = this.props.dispo;
    return (
      <button onClick={() => props.onClick(this.props.frame)} style={{height: '60px', width: '60px'}}>
        <svg viewBox="-31 -31 62 68">
          <path d={shield} style={{fill: shieldColor.value, strokeWidth: '0'}} />
          <path d={meubles[1].path}
            style={{fill: dispoColor.value, stroke: dispoColor.comp, strokeWidth: '0.5'}}
            transform={dispo.firstTransform}
          />
          { (dispo.secondTransform != '') ?
            <path d={meubles[1].path}
              style={{fill: dispoColor.value, stroke: dispoColor.comp, strokeWidth: '0.5'}}
              transform={dispo.secondTransform}
            /> : <path d='' />
          }
          { (dispo.thirdTransform != '') ?
            <path d={meubles[1].path}
              style={{fill: dispoColor.value, stroke: dispoColor.comp, strokeWidth: '0.5'}}
              transform={dispo.thirdTransform}
            /> : <path d='' />
          }
          < path d={shield}
            style={{fill: 'transparent', stroke: shieldColor.comp, strokeWidth: '0.5'}}
          />
        </svg>
      </button>
    );
  }
}
