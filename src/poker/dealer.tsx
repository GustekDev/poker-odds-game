import { Card, Cards, Rank, Suit, GameTurn } from "./types"

const suits = [Suit.HEARTHS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES]
const ranks = [
    Rank.RANK_2, Rank.RANK_3, Rank.RANK_4, Rank.RANK_5, Rank.RANK_6, Rank.RANK_7, Rank.RANK_8, Rank.RANK_9,
    Rank.RANK_10, Rank.RANK_JACK, Rank.RANK_QUEEN, Rank.RANK_KING, Rank.RANK_ACE
]

export const dealCards = (turn: GameTurn): Cards => {
    let cards = shuffle(getNewDeck());
    var communityCount = 3 + turn;
    return {
        player: cards.slice(0, 2),
        community: cards.slice(2, 2 + communityCount),
        remaining: cards.slice(2 + communityCount)
    }
}

export const getNewDeck = (): Card[] => {
    let cards: Card[] = [];
    for (let suit of suits) {
        for (let rank of ranks)
            cards.push({ suit, rank })
    }
    return cards;
}

const shuffle = (cards: Card[]) => {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return cards;
}
