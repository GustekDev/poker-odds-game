import * as React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  answer: Function;
}

const allRanks: HandRank[] = [
  'Straight Flush',
  'Four of a Kind',
  'Full House',
  'Flush',
  'Straight',
  'Three of a Kind',
  'Two Pair',
  'Pair',
  'High Card'
];

export default class HandsForm extends React.Component<Props, null> {
  render() {
    return (
      <div>
        {allRanks.map(hr =>
          <Button onClick={() => this.props.answer(hr)}>
            {hr}
          </Button>
        )}
      </div>
    );
  }
}
