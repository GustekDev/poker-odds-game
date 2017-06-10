import * as React from 'react';
import Deck from "./poker/Deck"
import './App.css';
import "./poker/cards.css"
import { evaluate } from "./poker/evaluator"
import Table from "./poker/Table"
import { getOuts } from "./game/outs"
import { displayCards } from "./poker/cards"

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    let deck = new Deck()
    deck.shuffle()
    let community = deck.deal(5)
    let hand = deck.deal(2)
    let rank = evaluate(community.concat(hand))
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Table community={community} hand={hand} />
          Best: {rank.name}
          <br />Desc: {rank.description}
          <br />HandRank: {rank.handRank}
          {displayCards(getOuts(community, hand, deck))}
        </p>
      </div>
    );
  }
}

export default App;
