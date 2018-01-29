import { Hand } from 'pokersolver';
import { shortCard } from './cards';
import * as Game from './game';
import * as Cards from '../cards/cards';

export const evaluate = (cards: Cards.Card[]): Game.PokerHand => {
    let hand: SolverHand = Hand.solve(cards.map(shortCard));
    return {
        name: hand.name as Game.HandRank,
        description: hand.descr,
        rank: hand.rank,
        handRank: getHandRank(hand.name as Game.HandRank)
    };
};

export const getHandRank = (name: Game.HandRank): number => {
    switch (name) {
        case 'Straight Flush': return 8;
        case 'Four of a Kind': return 7;
        case 'Full House': return 6;
        case 'Flush': return 5;
        case 'Straight': return 4;
        case 'Three of a Kind': return 3;
        case 'Two Pair': return 2;
        case 'Pair': return 1;
        case 'High Card': return 0;
        default: return 0;
    }
};
