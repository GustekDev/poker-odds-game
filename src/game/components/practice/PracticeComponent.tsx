import * as React from 'react';
import * as R from 'ramda';
import { GameTurn, Cards } from '../../../poker/types';
import OutsComponent from './OutsComponent';
import HandReadingComponent from './HandReadingComponent';
import Table from '../../../poker/Table';
import { dealUnfairCards } from '../../../poker/dealer';

interface Props {
    game: string
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
            cards: dealUnfairCards(GameTurn.FLOP)
        };
    }

    next() {
        this.setState((prev) =>
            R.merge(prev, {cards: dealUnfairCards(prev.gameTurn)})
        );
    }

    renderGame(game: string) {
        switch (game) {
            case 'hands': return (<HandReadingComponent cards={this.state.cards} next={() => this.next()} />);
            case 'outs': return (<OutsComponent cards={this.state.cards} next={() => this.next()} />);
            default: return 'Unknown game.'
        }
    }

    render() {
        return (
            <div>
                <Table community={this.state.cards.community} player={this.state.cards.player} />
                {this.renderGame(this.props.game)}
                </div>
        );
    }
}
