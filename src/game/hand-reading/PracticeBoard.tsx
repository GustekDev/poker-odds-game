import * as React from "react";
import * as R from "ramda";
import { evaluate } from "../../lib/poker/evaluator";
import { Button } from 'react-bootstrap';
import HandsForm from '../components/HandsForm';

interface Props {
    cards: Cards;
    next: Function;
}

interface State {
    guess?: HandRank;
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

    check = (guess: HandRank) => {
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
        console.log(this.state.guess);
        return (
            <div>
                {this.state.guess !== undefined
                ? <Button onClick={() => this.props.next()}>Next</Button>
                : <HandsForm answer={this.check} />}
                {this.renderAnswer(this.state)}
            </div>
        )
    }
}
