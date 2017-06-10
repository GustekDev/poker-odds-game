import * as React from 'react';
import Deck from "./poker/Deck"
import { displayCards } from "./poker/cards"
import './App.css';
import "./poker/cards.css"
import { evaluate } from "./poker/evaluator"

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    let deck = new Deck()
    deck.shuffle()
    let community = deck.deal(3)
    let hand = deck.deal(2)
    let rank = evaluate(community.concat(hand))
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Community: {displayCards(community)}
          Your cards: {displayCards(hand)}
          Best: {rank.name}
          <br />Desc: {rank.descr}
          <br />CArds: {rank.cards.join()}
          <br />Cards pool: {rank.cardPool.join()}
        </p>
      </div>
    );
  }
}

export default App;
