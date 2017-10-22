
export default class Deck {

    private suits: CardSuit[] = ['H', 'D', 'C', 'S'];
    private ranks: CardRank[] = ['2', '3', '4', '5', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    private cards: Card[] = [];

    constructor() {
        this.reset();
    }

    reset() {
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                this.cards.push({ suit, rank });
            }
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
        this.cards = this.cards.slice(n);
        return deal;
    }

    remainingCards(): Card[] {
        return this.cards;
    }
}
