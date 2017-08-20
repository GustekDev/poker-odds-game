import * as React from 'react';
import * as R from 'ramda';
import OutsComponent from './OutsComponent';
import HandReadingComponent from './HandReadingComponent';
import Table from '../../../lib/poker/Table';
import { dealUnfairCards } from '../../../lib/poker/dealer';

interface Props {
    game: GameName;
}

interface State {
    gameTurn: GameTurn;
    cards: Cards;
}

export default class PracticeComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            gameTurn: 'Flop',
            cards: dealUnfairCards('Flop')
        };
    }

    next() {
        this.setState((prev) =>
            R.merge(prev, {cards: dealUnfairCards(prev.gameTurn)})
        );
    }

    renderGame(game: GameName) {
        switch (game) {
            case 'hand-reading': return (<HandReadingComponent cards={this.state.cards} next={() => this.next()} />);
            case 'outs-counting': return (<OutsComponent cards={this.state.cards} next={() => this.next()} />);
            default: return 'Unknown game.';
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
