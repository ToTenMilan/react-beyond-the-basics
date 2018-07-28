import React, { Component } from 'react';

class TimeDisplay extends Component {
  render() {
    return (
      <p>{this.props.time.toString()}</p>
    );
  }
}
export default TimeDisplay;