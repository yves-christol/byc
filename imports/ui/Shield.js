import React, { Component } from 'react';

// Shield component - represents a single svg shield
export default class Shield extends Component {
  render() {
    return (
      <svg viewBox="-31 -31 62 68">
        <path d={shield} style={{fill: this.props.shieldColor.value, strokeWidth: '0'}} />
        <path d={this.props.frame.path}  style={{fill: this.props.frameColor.value}} />
        <path d={this.props.firstMeuble.path}
          style={{fill: this.props.firstColor.value, stroke: this.props.firstColor.comp, strokeWidth: '0.5'}}
          transform={this.props.dispo.firstTransform}
        />
        { (this.props.dispo.secondTransform != '') ?
          <path d={this.props.secondMeuble.path}
            style={{fill: this.props.secondColor.value, stroke: this.props.secondColor.comp, strokeWidth: '0.5'}}
            transform={this.props.dispo.secondTransform}
          /> : <path d='' />
        }
        { (this.props.dispo.thirdTransform != '') ?
          <path d={this.props.thirdMeuble.path}
            style={{fill: this.props.thirdColor.value, stroke: this.props.thirdColor.comp, strokeWidth: '0.5'}}
            transform={this.props.dispo.thirdTransform}
          /> : <path d='' />
        }
        < path d={shield}
          style={{fill: 'transparent', stroke: '#000000', strokeWidth: '0.5'}}
        />
      </svg>
    );
  }
}
