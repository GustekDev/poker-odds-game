import * as React from 'react';
import * as R from 'ramda';
import { GameTurn, Cards, PokerHand } from '../../poker/types';
import { dealCards } from '../../poker/dealer';
import Table from '../../poker/Table';
import OutsPracticeComponent from './OutsPracticeComponent';
import { getOuts } from '../outs';

interface Props {

}

interface State {
    gameTurn: GameTurn;
    cards: Cards;
    rank?: PokerHand;
}

export default class GameComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            gameTurn: GameTurn.FLOP,
            cards: dealCards(GameTurn.FLOP)
        };
        this.dealNewCards();
    }

    dealNewCards() {
        this.setState((prev: State) => {
            return R.merge(prev, { cards: dealCards(prev.gameTurn) });
        });
    }

    setTurn(turn: GameTurn) {
        this.setState((prev: State) => {
            return R.merge(prev, { gameTurn: turn });
        });
    }

    renderTurnRadios(curr: GameTurn): JSX.Element[] {
        let turns = [
            { turn: GameTurn.FLOP, label: 'Flop', checked: curr === GameTurn.FLOP },
            { turn: GameTurn.TURN, label: 'Turn', checked: curr === GameTurn.TURN },
            { turn: GameTurn.RIVER, label: 'River', checked: curr === GameTurn.RIVER },
        ];
        return turns.map((turn) => {
            return (
                <label>
                    <input
                        type="radio"
                        name="turn"
                        checked={turn.checked}
                        value={turn.turn}
                        onClick={() => this.setTurn(turn.turn)}
                    />{turn.label}
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
                <OutsPracticeComponent cards={this.state.cards} outs={getOuts(this.state.cards)} />
            </div>
        );
    }
}
