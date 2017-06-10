import * as React from "react"
import * as R from "ramda"
import { GameTurn, Cards, PokerHand } from "../../poker/types"
import { dealCards } from "../../poker/dealer"
import Table from "../../poker/Table"

interface Props {

}

interface State {
    gameTurn: GameTurn;
    cards: Cards;
    rank?: PokerHand;
}

export default class GameComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            gameTurn: GameTurn.FLOP,
            cards: dealCards(GameTurn.FLOP)
        }
        this.dealNewCards()
    }

    dealNewCards() {
        this.setState((prev: State) => {
            return R.merge(prev, { cards: dealCards(prev.gameTurn) })
        })
    }

    render() {
        return (<div>
            <button onClick={() => this.dealNewCards()}>Deal</button>
            <Table community={this.state.cards.community} player={this.state.cards.player} />
        </div>)
    }
}
