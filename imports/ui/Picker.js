import React, { Component } from 'react';

// Generic Picker
export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.pick = this.pick.bind(this);
  }

  pick(item) {
    this.props.action(this.props.attribute, item);
  }

  renderList() {
    return (
      <div>
        generic picker, should not see this
      </div>
    );
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}
