import * as React from 'react';
import * as Game from '../../lib/poker/game';
import * as classNames from 'classnames';

interface Props {
  onClick: Function;
  correct: Game.HandRank;
  selected?: Game.HandRank;
}

const ranksRow1: Game.HandRank[] = ['High Card', 'Pair', 'Two Pair'];

const ranksRow2: Game.HandRank[] = ['Three of a Kind', 'Flush', 'Straight'];

const ranksRow3: Game.HandRank[] = [
  'Full House',
  'Four of a Kind',
  'Straight Flush'
];

export default class HandsForm extends React.Component<Props, {}> {

  renderButton = (hr: Game.HandRank) => {
    let styles = classNames({
      'correct': this.props.selected && this.props.correct === hr,
      'incorrect': this.props.selected && this.props.correct !== this.props.selected && this.props.selected === hr
    });
    return (
      <button 
        onClick={() => this.props.onClick(hr)}
        className={styles}
      >
        {hr}
      </button>
    );
  }

  renderRow(ranks: Game.HandRank[]) {
    return (
      <div>
        {ranks.map(this.renderButton)}
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
