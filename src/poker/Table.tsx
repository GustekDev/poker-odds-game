import * as React from 'react';

import { Card } from './types';
import { displayCards } from './cards';

interface Props {
    community: Card[];
    player: Card[];
}

export default class Table extends React.Component<Props, null> {

    renderUnknown(dealtCount: number): JSX.Element[] {
        var cards = [];
        for(let i = 0; i < 5 - dealtCount; i++) {
            cards.push(<div className="card back">*</div>)
        }
        return cards;
    }

    render() {
        return (
            <div>
                Community: {displayCards(this.props.community)}{this.renderUnknown(this.props.community.length)}
                Your cards: {displayCards(this.props.player)}
            </div>
        );
    }
}
