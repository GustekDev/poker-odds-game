import * as React from 'react';
import './App.css';
import './poker/cards.css';
import PracticeComponenet from './game/components/practice/PracticeComponent';
import { dealCards } from './poker/dealer';

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
          <PracticeComponenet dealer={dealCards} />
        </p>
      </div>
    );
  }
}

export default App;
