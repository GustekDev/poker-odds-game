import { Hand } from "pokersolver"
import { Card } from "./types"
import { shortCard } from "./cards"

export const evaluate = (cards: Card[]): PokerHand => {
    return Hand.solve(cards.map(shortCard))
}
