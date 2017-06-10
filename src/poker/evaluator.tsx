import { Hand } from "pokersolver"
import { Card, PokerHand, HandRank } from "./types"
import { shortCard } from "./cards"

export const evaluate = (cards: Card[]): PokerHand => {
    let hand: SolverHand = Hand.solve(cards.map(shortCard))
    return {
        name: hand.name,
        description: hand.descr,
        rank: hand.rank,
        handRank: getHandRank(hand.name)
    }
}

const getHandRank = (name: String): HandRank => {
    switch(name) {
        case "Straight Flush": return HandRank.STRAIGHT_FLUSH
        case "Four of a Kind": return HandRank.FOUR_OF_KIND
        case "Full House": return HandRank.FULL_HOUSE
        case "Flush": return HandRank.FLUSH
        case "Straight": return HandRank.STRAIGHT
        case "Three of a Kind": return HandRank.THREEE_OF_KIND
        case "Two Pair": return HandRank.TWO_PAIRS
        case "Pair": return HandRank.PAIR
    }
    return HandRank.HIGH_CARD
}
