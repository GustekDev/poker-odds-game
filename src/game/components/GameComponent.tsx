import * as React from 'react';
import * as R from 'ramda';
import { dealCards } from '../../lib/poker/dealer';
import Table from '../../lib/poker/Table';
import * as Cards from '../../lib/cards/cards';
import * as Game from '../../lib/poker/game';

interface Props {

}

interface State {
    gameTurn: Game.GameTurn;
    cards: Cards.Table;
    rank?: Game.PokerHand;
}

export default class GameComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            gameTurn: 'Flop',
            cards: dealCards('Flop')
        };
        this.dealNewCards();
    }

    dealNewCards() {
        this.setState((prev: State) => {
            return R.merge(prev, { cards: dealCards(prev.gameTurn) });
        });
    }

    setTurn(turn: Game.GameTurn) {
        this.setState((prev: State) => {
            return R.merge(prev, { gameTurn: turn });
        });
    }

    renderTurnRadios(curr: Game.GameTurn): JSX.Element[] {
        let turns: Game.GameTurn[] = [ 'Flop', 'Turn', 'River'];
        return turns.map((turn) => {
            return (
                <label key="turn-label">
                    <input
                        type="radio"
                        name="turn"
                        checked={this.state.gameTurn === turn}
                        value={turn}
                        onClick={() => this.setTurn(turn)}
                    />{turn}
                </label>
            );
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderTurnRadios(this.state.gameTurn)}
                </div>
                <button onClick={() => this.dealNewCards()}>Deal</button>
                <Table community={this.state.cards.community} player={this.state.cards.player} />
            </div>
        );
    }
}
