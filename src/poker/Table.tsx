import * as React from 'react';

import { Card } from './types';
import { displayCards, displayCommnityCards } from './cards';

interface Props {
    community: Card[];
    player: Card[];
}

export default class Table extends React.Component<Props, null> {



    render() {
        return (
            <div>
                Community: {displayCommnityCards(this.props.community)}
                Your cards: {displayCards(this.props.player)}
            </div>
        );
    }
}
