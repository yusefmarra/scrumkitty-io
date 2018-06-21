import React, { Component } from 'react';
import innerKitty from './images/InnerKitty.png'
import outerKitty from './images/OuterKitty.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <img src={outerKitty} className="app-logo-outer" alt="logo" />
        <img src={innerKitty} className="app-logo-inner" alt="logo" />
      </div>
    );
  }
}

export default App;
