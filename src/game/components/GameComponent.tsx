import * as React from "react"
import { GameTurn, Card, PokerHand } from "../../poker/types"
import Deck from "../../poker/Deck"
import Table from "../../poker/Table"
import { evaluate } from "../../poker/evaluator"

interface Props {

}

interface State {
    gameTurn: GameTurn;
    deck: Deck;
    community: Card[];
    player: Card[];
    rank?: PokerHand;
}

export default class GameComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            gameTurn: GameTurn.FLOP,
            deck: new Deck(),
            community: [],
            player: [],
        }
        this.dealNewCards()
    }

    dealNewCards() {
        let deck = new Deck()
        deck.shuffle()
        let community = deck.deal(3)
        let player = deck.deal(2)
        let rank = evaluate(community.concat(player))
        this.setState({
            deck,
            community,
            player,
            rank
        })
    }

    render() {
        return (<div>
            <button onClick={() => this.dealNewCards()}>Deal</button>
        <Table community={this.state.community} player={this.state.player} />
          </div>)
    }
}
