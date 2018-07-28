import React, { Component } from 'react';
import TimeDisplay from './TimeDisplay';
import store from '../store/index';

class App extends Component {
  state = store.state;

  componentDidMount() {
    store.on('change', () => {
      this.setState(store.state);
    });
  }

  render() {
    return (
      <div className="demo">
        Hello World (App)
        <input />
        <TimeDisplay time={this.state.time} />
      </div>
    );
  }
}
export default App;

// 109:29 eslint --init
// ctrl+alt+f auto prettier code (in atom)