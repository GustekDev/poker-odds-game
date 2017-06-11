import * as React from "react";
import * as R from "ramda";
import { Cards, HandRank } from "../../../poker/types";
import { displayHandRank, evaluate } from "../../../poker/evaluator";

interface Props {
    cards: Cards;
    next: Function;
}

interface State {
    guess?: HandRank;
    showAnswer: boolean;
    showNotice: boolean;
}

const allRanks = [
    HandRank.HIGH_CARD, HandRank.PAIR, HandRank.TWO_PAIRS, HandRank.THREEE_OF_KIND, HandRank.STRAIGHT,
    HandRank.FLUSH, HandRank.FULL_HOUSE, HandRank.FOUR_OF_KIND, HandRank.STRAIGHT_FLUSH
];

export default class HandReadingComponent extends React.Component<Props, State> {

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
                    <span>{state.guess === answer.handRank ? 'Correct' : 'Wrong'}</span>
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
                ? <button onClick={() => this.props.next()}>Next</button>
                : allRanks.map((hr: HandRank) =>
                    (<button onClick={() => this.check(hr)}>{displayHandRank(hr)}</button>)
                )}
                {this.renderAnswer(this.state)}
            </div>
        )
    }
}
