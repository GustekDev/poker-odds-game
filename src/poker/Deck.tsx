import { Card } from "./types"

export default class Deck {

    private cards: Card[]

    constructor() {
        this.reset()
    }

    reset() {
        for (let suit in ["Hearths", "Diamonds", "Clubs", "Spades"]) {
            for (let rank in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"])
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
