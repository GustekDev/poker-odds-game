import * as React from 'react';
import * as Game from '../../lib/poker/game';

interface Props {
    answer: Function;
}

const allRanks = [
    'Straight Flush',
    'Four of a Kind',
    'Full House',
    'Flush',
    'Straight',
    'Three of a Kind',
    'Two Pair',
    'Pair',
    'High card'
];

export default class AnswerForm extends React.Component<Props, null> {

    render() {
        return (
            <div>
                {allRanks.map((hr: Game.HandRank) =>
                    (<button onClick={() => this.props.answer(hr)}>{hr}</button>))
                }
            </div>
        );
    }
}
