export const enum Suit { HEARTHS, DIAMONDS, CLUBS, SPADES }
export const enum Rank { 
    RANK_2,
    RANK_3,
    RANK_4,
    RANK_5,
    RANK_6,
    RANK_7,
    RANK_8,
    RANK_9,
    RANK_10,
    RANK_JACK,
    RANK_QUEEN,
    RANK_KING,
    RANK_ACE
}

interface Card {
    suit: Suit
    rank: Rank
}


