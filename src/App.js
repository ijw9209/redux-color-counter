import React, { Component } from 'react';

import './App.css';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';
import WatingListContainer from './containers/WatingListContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WatingListContainer />
      </div>
    );
  }
}

export default App;