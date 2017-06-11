import * as React from 'react';

import { Card, Cards } from '../../poker/types';

interface Props {
    cards: Cards;
    outs: Card[];
}

interface State {
    guess?: number;
}

export default class OutsPracticeComponent extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <label>How many outs do you have?<input type="number" /></label>
            </div>
        );
    }
}
