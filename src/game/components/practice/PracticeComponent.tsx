import * as React from 'react';
import * as R from 'ramda';
import { GameTurn, Cards } from '../../../poker/types';
// import OutsComponent from './OutsComponent';
import HandReadingComponent from './HandReadingComponent';
import Table from '../../../poker/Table';

interface Props {
    dealer: (gt: GameTurn) => Cards;
}

interface State {
    gameTurn: GameTurn;
    cards: Cards;
}

export default class PracticeComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            gameTurn: GameTurn.FLOP,
            cards: this.props.dealer(GameTurn.FLOP)
        };
    }

    next() {
        this.setState((prev) =>
            R.merge(prev, {cards: this.props.dealer(prev.gameTurn)})
        );
    }

    render() {
        return (
            <div>
                <Table community={this.state.cards.community} player={this.state.cards.player} />
                {/*<OutsComponent cards={this.state.cards} next={() => this.next()} />*/}
                <HandReadingComponent cards={this.state.cards} next={() => this.next()} />
            </div>
        );
    }
}
