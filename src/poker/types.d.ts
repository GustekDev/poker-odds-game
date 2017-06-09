
export type Suit = "Hearths" | "Diamonds" | "Clubs" | "Spades"
export type Rank = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "Jack" | "Queen" | "King" | "Ace"

interface Card {
    suit: Suit
    rank: Rank
}
