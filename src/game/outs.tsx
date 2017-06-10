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
    if (handRank.handRank < HandRank.STRAIGHT) {
        let straightOuts = checkForStraights(community, hand, remainingCards)
        if (straightOuts.length > 0) {
            return straightOuts
        }
    }
    var outs = [];
    for (let card of remainingCards) {
        if (evaluate(R.append(card, allCards)).rank > handRank.rank) {
            outs.push(card)
        }
    }
    return outs;
}

const checkForStraights = (community: Card[], hand: Card[], remainingCards: Card[]): Card[] => {
    let allCards = community.concat(hand)
    var outs = [];
    for (let card of remainingCards) {
        let rank = evaluate(R.append(card, allCards))
        if (rank.handRank == HandRank.STRAIGHT) {
            outs.push(card)
        }
    }
    return outs;
}

const isPocketPair = (hand: Card[]): boolean => {
    return hand[0].rank == hand[1].rank
}
