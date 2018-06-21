import React, { Component } from 'react';
import innerKitty from './images/InnerKitty.png';
import outerKitty from './images/OuterKitty.png';
import WordCircle from './components/WordCircle';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        'rocket dev',
        'moonbiskets',
        'pinecones',
        'rocks',
        'yusef',
        'meow',
        'time',
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <img src={innerKitty} className="app-logo-inner" alt="logo" />
          <div className="app-logo-outer">
            <WordCircle words={this.state.words} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
