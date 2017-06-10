import * as React from 'react';

import { Card } from "./types";
import { displayCards } from "./cards"


interface Props {
    community: Card[];
    hand: Card[]
}

export default class Table extends React.Component<Props, null> {

    render() {
        return (<div>
            Community: {displayCards(this.props.community)}
            Your cards: {displayCards(this.props.hand)}
        </div>)
    }
}
