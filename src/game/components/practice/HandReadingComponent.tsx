import * as React from "react";
import { Cards, PokerHand, HandRank} from "../../poker/types";
import { displayHandRank } from "../../poker/evaluator";

interface Props {
    cards: Cards;
    hand: PokerHand;
}

interface State {
    guess?: HandRank;
    showAnswer: boolean;
}

const allRanks = [
    HandRank.HIGH_CARD, HandRank.PAIR, HandRank.TWO_PAIRS, HandRank.THREEE_OF_KIND, HandRank.STRAIGHT,
    HandRank.FLUSH, HandRank.FULL_HOUSE, HandRank.FOUR_OF_KIND, HandRank.STRAIGHT_FLUSH
];

export default class HandReadingPracticeComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { showAnswer: false }
    }

    render() {
        return (
            <div>
                {allRanks.map((hr: HandRank) => (<button>{displayHandRank(hr)}</button>))}
            </div>
        )
    }
}
