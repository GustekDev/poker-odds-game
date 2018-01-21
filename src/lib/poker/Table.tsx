import * as React from 'react';
import * as Cards from '../cards/cards';

import { displayCards, displayCommnityCards } from './cards';

interface Props {
    community: Cards.Card[];
    player: Cards.Card[];
}

export default class Table extends React.Component<Props, {}> {

    render() {
        return (
            <div>
                Community: {displayCommnityCards(this.props.community)}
                Your cards: {displayCards(this.props.player)}
            </div>
        );
    }
}
