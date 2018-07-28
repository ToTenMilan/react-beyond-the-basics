import React, { Component } from 'react';
import TimeDisplay from './TimeDisplay';
import storeGen from '../store/index';
import { Provider } from './appContext';

class App extends Component {
  render() {
    return (
      <div className="demo">
        Hello World (App)
        <input />
        <TimeDisplay />
      </div>
    );
  }
}

class Root extends Component {
  store = storeGen();

  render() {
    return (
      <Provider value={this.store}>
        <App />
      </Provider>
    );
  }
}

export default Root;

// 109:29 eslint --init
// ctrl+alt+f auto prettier code (in atom)
