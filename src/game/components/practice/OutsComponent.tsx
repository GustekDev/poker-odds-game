import * as React from 'react';
import * as R from 'ramda';
import { getOuts } from '../../../lib/poker/outs';
import * as Cards from '../../../lib/cards/cards';

interface Props {
    cards: Cards.Table;
    next: Function;
}

interface State {
    guess?: number;
    showAnswer: boolean;
    showNotice: boolean;
}

export default class OutsPracticeComponent extends React.Component<Props, State> {

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

    submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.state.showAnswer) {
            this.props.next();
        } else {
             this.check();
        }
    }

    setGuess = (guess: number) => {
        this.setState((prev: State) => R.merge(prev, {guess}));
    }

    check = () => {
        if (this.state.guess) {
            this.setState((prev) => R.merge(prev, {showAnswer: true, showNotice: false}));
        } else {
            this.setState((prev) => R.merge(prev, {showNotice: true}));
        }
    }

    renderAnswer = (state: State) => {
        let outs = getOuts(this.props.cards).length;
        if (state.showAnswer) {
            return (
                <div>
                    <span>{state.guess === outs ? 'Correct' : 'Wrong. There are ' + outs}</span>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.submit(event)}>
                    <div>{this.state.showNotice ? 'Provide the answer' : null}</div>
                <label>How many outs do you have?
                    <input
                        type="number"
                        onChange={(e) => this.setGuess(parseInt(e.target.value, 10))}
                        value={this.state.guess}
                    />
                </label>
                <input type="submit" value={this.state.showAnswer ? 'Next' : 'Guess'} />
                </form>
                {this.renderAnswer(this.state)}
            </div>
        );
    }
}
