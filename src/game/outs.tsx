import * as R from "ramda"
import { evaluate} from "../poker/evaluator"
import { Card } from "../poker/types"
import Deck from "../poker/Deck"

export const getOuts = (community: Card[], hand: Card[], deck: Deck): Card[] => {
    let remainingCards = deck.remainingCards()
    let allCards = community.concat(hand)
    let handRank = evaluate(allCards)
    var outs = [];
    for (let card of remainingCards) {
        if (evaluate(R.append(card, allCards)).rank > handRank.rank) {
            outs.push(card)
        }
    }
    return outs;
}
