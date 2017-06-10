import { Card, Suit, Rank } from "./types"

export default class Deck {


    private suits = [Suit.HEARTHS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES]
    private ranks = [
        Rank.RANK_2, Rank.RANK_3, Rank.RANK_4, Rank.RANK_5, Rank.RANK_6, Rank.RANK_7, Rank.RANK_8, Rank.RANK_9,
        Rank.RANK_10, Rank.RANK_JACK, Rank.RANK_QUEEN, Rank.RANK_KING, Rank.RANK_ACE
    ]

    private cards: Card[] = [];

    constructor() {
        this.reset()
    }

    reset() {
        for (let suit of this.suits) {
            for (let rank of this.ranks)
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
