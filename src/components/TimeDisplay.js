import React, { Component } from 'react';
import { Consumer } from './appContext';

class TimeDisplay extends Component {
  state = this.props.store.state;

  componentDidMount() {
    this.props.store.on('change', (newState) => {
      this.setState(newState);
    });
  }

  render() {
    return (
      <p>{this.state.time.toString()}</p>
    );
  }
}

class TimeDisplayConnected extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          return <TimeDisplay store={store} />;
        }}
      </Consumer>
    );
  }
}

export default TimeDisplayConnected;
