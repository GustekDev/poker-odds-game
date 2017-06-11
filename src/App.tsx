import * as React from 'react';
import './App.css';
import './poker/cards.css';
import GameComponenet from './game/components/GameComponent';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <GameComponenet />
        </p>
      </div>
    );
  }
}

export default App;
