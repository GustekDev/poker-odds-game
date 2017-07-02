declare module "pokersolver"

interface SolverHand {
    name: string;
    descr: string;
    rank: number;
    cardPool: string[];
    cards: string[];
}
