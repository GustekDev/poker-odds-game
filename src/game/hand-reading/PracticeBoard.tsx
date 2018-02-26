import * as React from 'react';
import * as R from 'ramda';
import { evaluate } from '../../lib/poker/evaluator';
import HandsForm from '../components/HandsForm';
import * as Cards from '../../lib/cards/cards';
import * as Game from '../../lib/poker/game';

interface Props {
    cards: Cards.Table;
    next: Function;
}

interface State {
    guess?: Game.HandRank;
    showAnswer: boolean;
    showNotice: boolean;
}

export default class PracticeBoard extends React.Component<Props, State> {

    private initState: State = { showAnswer: false, showNotice: false, guess: undefined };

    constructor(props: Props) {
        super(props);
        this.state = this.initState;
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps !== this.props) {
            this.setState(
                this.initState
            );
        }
    }

    check = (guess: Game.HandRank) => {
        this.setState((prev) => R.merge(prev, { showAnswer: true, guess: guess }));
    }

    renderAnswer = (state: State) => {
        if (state.showAnswer) {
        let answer = evaluate(this.props.cards.community.concat(this.props.cards.player));
        return (
                <div>
                    <span>{state.guess === answer.name ? 'Correct' : 'Wrong'}</span>
                    <br /><span>{answer.description}</span>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.state.guess !== undefined
                ? <button onClick={() => this.props.next()}>Next</button>
                : <HandsForm answer={this.check} />}
                {this.renderAnswer(this.state)}
            </div>
        );
    }
}
