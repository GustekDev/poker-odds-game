import * as Cards from './lib/cards/cards';

type GameName = "hand-reading" | "outs-counting"

interface GameSettings {
    turn: GameTurn;
    rounds: number;
    game: GameName;
}

type GameTurn = "Flop" | "Turn" | "River"
type HandRank = 'Straight Flush' | 'Four of a Kind' | 'Full House' | 'Flush' | 'Straight' | 'Three of a Kind' | 'Two Pair' | 'Pair' | 'High Card'


type Round = OutsRound | HandRound

interface OutsRound {
    game: "outs-counting"
    community: Cards.Card[];
    hand: Cards.Card[];
    answer: Cards.Card[];
    correctAnswer: number;
    userAnswer?: number;
}

interface HandRound {
    game: "hand-reading"
    community: Cards.Card[];
    hand: Cards.Card[];
    correctAnswer: HandRank;
    userAnswer?: HandRank;
}

interface PokerHand {
    name: HandRank;
    description: string;
    rank: number;
    handRank: number
}
