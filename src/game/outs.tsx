import * as R from "ramda"
import { evaluate } from "../poker/evaluator"
import { Card, HandRank, Suit } from "../poker/types"
import { shortSuit } from "../poker/cards"

export const getOuts = (community: Card[], hand: Card[], remainingCards: Card[]): Card[] => {
    let allCards = community.concat(hand)
    let handRank = evaluate(allCards)
    if (handRank.handRank == HandRank.PAIR) {
        return getMatchingCards(hand, remainingCards)
    }
    if (handRank.handRank < HandRank.STRAIGHT) {
        let straightOuts = checkForStraights(community, hand, remainingCards)
        if (straightOuts.length > 0) {
            return straightOuts
        }
    }
    let flushDrawSuit = isFlushDraw(community, hand)
    if (flushDrawSuit) {
        return R.filter((c: Card) => c.suit == flushDrawSuit, remainingCards)
    }
    var outs = [];
    for (let card of remainingCards) {
        if (evaluate(R.append(card, allCards)).rank > handRank.rank) {
            outs.push(card)
        }
    }
    return outs;
}

const getMatchingCards = (hand: Card[], remainingCards: Card[]): Card[] => {
    let outs = [];
    let handRanks = hand.map((c) => c.rank)
    for (let card of remainingCards) {
        if (R.contains(card.rank, handRanks)) {
            outs.push(card)
        }
    }
    return outs;
}

// const noPair = (cards: Card[]): boolean => {
//     return R.uniq(cards.map((c) => c.rank)).length == cards.length;
// }

const isFlushDraw = (community: Card[], hand: Card[]): Suit | undefined => {
    let suitsCount: {[suit: string]: number} = R.countBy((c: Card) => shortSuit(c.suit), community.concat(hand))
    return R.find((c: Card) => {
        return R.prop(shortSuit(c.suit), suitsCount) == 4
    })(hand).suit
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

// const isPocketPair = (hand: Card[]): boolean => {
//     return hand[0].rank == hand[1].rank
// }
