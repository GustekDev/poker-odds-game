import * as React from 'react';
import Deck from "./poker/Deck"
import { displayCards } from "./poker/cards"
import './App.css';
import "./poker/cards.css"

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    let deck = new Deck()
    deck.shuffle()
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Community: {displayCards(deck.deal(3))}
          Your cards: {displayCards(deck.deal(2))}
        </p>
      </div>
    );
  }
}

export default App;
