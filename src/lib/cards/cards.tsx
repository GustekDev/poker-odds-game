
export enum Suit { Spades, Clubs, Diamonds, Hearts }
// Ace is at the end as in majority of cases it has highest value
export enum Rank { Two = 2, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace }

export interface Card {
    suit: Suit;
    rank: Rank;
}

export type Deck = Card[];

export interface Table {
    community: Card[];
    player: Card[];
    remaining: Card[];
}

export function newDeck() {
    let cards: Deck = [];
    for (var rank = Rank.Two; rank <= Rank.Ace; rank++) {
        for (var suit = Suit.Spades; suit <= Suit.Hearts; suit++) {
            cards.push({ suit, rank });
        }
    }
    return cards;
}
