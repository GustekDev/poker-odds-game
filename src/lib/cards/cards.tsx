
export enum Suit {Spades, Clubs, Diamonds, Hearts}
// Ace is at the end as in majority of cases it has highest value
export enum Rank {Two = 2, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace}

export interface Card {
    suit: Suit;
    rank: Rank;
}

export type Deck = Card[]

export interface Table {
    community: Card[];
    player: Card[];
    remaining: Card[];
}

export function newDeck() {
    let cards: Deck = [];
    for(var rank = Rank.Two; rank <= Rank.Ace; rank++) {
        for(var suit = Suit.Spades; suit <= Suit.Hearts; suit++) {
            cards.push({suit, rank})
        }
    }
    return cards;
}

export type GameName = "hand-reading" | "outs-counting"

export interface GameSettings {
    turn: GameTurn;
    rounds: number;
    game: GameName;
}

export type GameTurn = "Flop" | "Turn" | "River"
export type HandRank = 'Straight Flush' | 'Four of a Kind' | 'Full House' | 'Flush' | 'Straight' | 'Three of a Kind' | 'Two Pair' | 'Pair' | 'High Card'


export type Round = OutsRound | HandRound

export interface OutsRound {
    game: "outs-counting"
    community: Card[];
    hand: Card[];
    answer: Card[];
    correctAnswer: number;
    userAnswer?: number;
}

export interface HandRound {
    game: "hand-reading"
    community: Card[];
    hand: Card[];
    correctAnswer: HandRank;
    userAnswer?: HandRank;
}

export interface PokerHand {
    name: HandRank;
    description: string;
    rank: number;
    handRank: number
}
