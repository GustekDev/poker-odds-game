
const enum Suit { HEARTHS, DIAMONDS, CLUBS, SPADES }
const enum Rank { 
    RANK_1,  
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
const suits = [Suit.HEARTHS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES]
const ranks = [Rank.RANK_1, Rank.RANK_2, Rank.RANK_3]

interface Card {
    suit: Suit
    rank: Rank
}

export default class Deck {

    private cards: Card[]

    constructor() {
        this.reset()
    }

    reset() {
        for (let suit of suits) {
            for (let rank of ranks)
                this.cards.push({ suit, rank })
        }
    }

    shuffle() {
        let cards = this.cards;
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

        this.cards = cards;
    }

    deal(n: number): Card[] {
        let deal = this.cards.slice(0, n);
        this.cards = this.cards.slice(n)
        return deal;
    }
}
