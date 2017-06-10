declare module "pokersolver"


interface PokerHand {
    name: string;
    descr: string;
    rank: number;
    cardPool: string[];
    cards: string[];
}
