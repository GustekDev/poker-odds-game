import * as Cards from '../cards/cards';
import * as Game from './game';

export type GameTurn = "Flop" | "Turn" | "River"
export type HandRank = 'Straight Flush' | 'Four of a Kind' | 'Full House' | 'Flush' | 'Straight' | 'Three of a Kind' | 'Two Pair' | 'Pair' | 'High Card'
export type GameName = "hand-reading" | "outs-counting"

export interface GameSettings {
    turn: Game.GameTurn;
    rounds: number;
    game: GameName;
}

export type Round = OutsRound | HandRound

export interface OutsRound {
    game: "outs-counting"
    community: Cards.Card[];
    hand: Cards.Card[];
    answer: Cards.Card[];
    correctAnswer: number;
    userAnswer?: number;
}

export interface HandRound {
    game: "hand-reading"
    community: Cards.Card[];
    hand: Cards.Card[];
    correctAnswer: HandRank;
    userAnswer?: HandRank;
}

export interface PokerHand {
    name: HandRank;
    description: string;
    rank: number;
    handRank: number
}
