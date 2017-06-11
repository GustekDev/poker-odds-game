import * as React from 'react';
import * as R from 'ramda';

import { Card, Cards } from '../../poker/types';

interface Props {
    cards: Cards;
    outs: Card[];
}

interface State {
    guess?: number;
    showAnswer: boolean;
}

export default class OutsPracticeComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { showAnswer: false }
    }

    guess = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.check();
    }

    setGuess = (guess: number) => {
        this.setState((prev: State) => R.merge(prev, {guess}))
    }

    check = () => {
        this.setState((prev) => R.merge(prev, {showAnswer: true}))
    }

    renderAnswer = (state: State) => {
        let outs = this.props.outs.length;
        if (state.showAnswer) {
            return (
                <div>
                    <span>{state.guess === outs ? "Correct" : "Wrong. There are " + outs}</span>
                </div>
            )
        }
        return null;
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.guess(event)}>
                <label>How many outs do you have?<input type="number" /></label>
                <input type="submit" value="Guess" />
                </form>
                {this.renderAnswer(this.state)}
            </div>
        );
    }
}
