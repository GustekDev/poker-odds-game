import * as R from "ramda"
import { evaluate } from "../poker/evaluator"
import { Card, HandRank } from "../poker/types"

export const getOuts = (community: Card[], hand: Card[], remainingCards: Card[]): Card[] => {
    let allCards = community.concat(hand)
    let handRank = evaluate(allCards)
    if (handRank.handRank == HandRank.PAIR && isPocketPair(hand)) {
        let isOut = (card: Card) => card.rank == hand[0].rank
        return R.filter(isOut, remainingCards)
    }
    var outs = [];
    for (let card of remainingCards) {
        if (evaluate(R.append(card, allCards)).rank > handRank.rank) {
            outs.push(card)
        }
    }
    return outs;
}

const isPocketPair = (hand: Card[]): boolean => {
    return hand[0].rank == hand[1].rank
}
