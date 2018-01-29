import * as React from 'react';
import * as Game from '../../lib/poker/game';

interface Props {
  answer: Function;
}

const ranksRow1: Game.HandRank[] = ['High Card', 'Pair', 'Two Pair'];

const ranksRow2: Game.HandRank[] = ['Three of a Kind', 'Flush', 'Straight'];

const ranksRow3: Game.HandRank[] = [
  'Full House',
  'Four of a Kind',
  'Straight Flush'
];

export default class HandsForm extends React.Component<Props, {}> {
  renderRow(ranks: Game.HandRank[]) {
    return (
      <div>
        {ranks.map(hr => (
          <button onClick={() => this.props.answer(hr)}>{hr}</button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderRow(ranksRow3)}
        {this.renderRow(ranksRow2)}
        {this.renderRow(ranksRow1)}
      </div>
    );
  }
}
