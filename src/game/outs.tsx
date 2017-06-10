import * as R from "ramda"
import { evaluate } from "../poker/evaluator"
import { Card, HandRank } from "../poker/types"
// import { shortCard } from "../poker/cards"

export const getOuts = (community: Card[], hand: Card[], remainingCards: Card[]): Card[] => {
    let allCards = community.concat(hand)
    let handRank = evaluate(allCards)
    if (handRank.handRank == HandRank.PAIR) {
        if (isPocketPair(hand)) {
            let isOut = (card: Card) => card.rank == hand[0].rank
            return R.filter(isOut, remainingCards)
        }
        if (noPair(community)) {
            var outs = [];
            for (let card of remainingCards) {
                let newCommunity = R.append(card, community)
                let rank = evaluate(newCommunity.concat(hand))
                if ((rank.handRank == HandRank.TWO_PAIRS && noPair(newCommunity))
                 || rank.handRank == HandRank.THREEE_OF_KIND) {
                    outs.push(card)
                }
            }
            return outs;
        }
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

const noPair = (cards: Card[]): boolean => {
    return R.uniq(cards.map((c) => c.rank)).length == cards.length;
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
