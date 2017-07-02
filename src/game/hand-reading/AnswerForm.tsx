import * as React from "react";
import { HandRank } from "../../poker/types";
import { displayHandRank } from "../../poker/evaluator";
import { Button } from 'react-bootstrap';

interface Props {
    answer: Function;
}

const allRanks = [
    HandRank.HIGH_CARD, HandRank.PAIR, HandRank.TWO_PAIRS, HandRank.THREEE_OF_KIND, HandRank.STRAIGHT,
    HandRank.FLUSH, HandRank.FULL_HOUSE, HandRank.FOUR_OF_KIND, HandRank.STRAIGHT_FLUSH
];

export default class AnswerForm extends React.Component<Props, null> {

    render() {
        return (
            <div>
                {allRanks.map((hr: HandRank) =>
                    (<Button onClick={() => this.props.answer(hr)}>{displayHandRank(hr)}</Button>))
                }
            </div>
        )
    }
}
