import * as React from 'react';
import * as R from 'ramda';
import { evaluate } from '../../../lib/poker/evaluator';
import HandsForm from '../HandsForm';
import * as Cards from '../../../lib/cards/cards';
import * as Game from '../../../lib/poker/game';

interface Props {
  cards: Cards.Table;
  next: Function;
}

interface State {
  guess?: Game.HandRank;
  showAnswer: boolean;
  showNotice: boolean;
}

export default class HandReadingComponent extends React.Component<Props, State> {
  private initState: State = {
    showAnswer: false,
    showNotice: false,
    guess: undefined
  };

  constructor(props: Props) {
    super(props);
    this.state = this.initState;
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps !== this.props) {
      this.setState(this.initState);
    }
  }

  check = (guess: Game.HandRank) => {
    this.setState(prev => R.merge(prev, { showAnswer: true, guess: guess }));
  }

  answer = () => evaluate(
    this.props.cards.community.concat(this.props.cards.player)
  ).name

  renderAnswer = (state: State) => {
    if (state.showAnswer) {
      let answer = evaluate(
        this.props.cards.community.concat(this.props.cards.player)
      );
      return (
        <div>
          <span>
            {state.guess === answer.name ? 'Correct' : 'Wrong'}
          </span>
          <br />
          <span>
            {answer.description}
          </span>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.state.guess !== undefined
          ? <HandsForm onClick={this.props.next} correct={this.answer()} selected={this.state.guess} />
          : <HandsForm onClick={this.check} correct={this.answer()} />}
        {this.renderAnswer(this.state)}
      </div>
    );
  }
}
