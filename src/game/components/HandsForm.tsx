import * as React from 'react';

interface Props {
  answer: Function;
}

const ranksRow1: HandRank[] = ['High Card', 'Pair', 'Two Pair'];

const ranksRow2: HandRank[] = ['Three of a Kind', 'Flush', 'Straight'];

const ranksRow3: HandRank[] = [
  'Full House',
  'Four of a Kind',
  'Straight Flush'
];

export default class HandsForm extends React.Component<Props, any> {
  renderRow(ranks: HandRank[]) {
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
