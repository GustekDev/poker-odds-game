import * as React from 'react';
import { Button } from 'react-bootstrap';

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

export default class HandsForm extends React.Component<Props, null> {
  renderRow(ranks: HandRank[]) {
    return (
      <div>
        {ranks.map(hr => (
          <Button onClick={() => this.props.answer(hr)}>{hr}</Button>
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
