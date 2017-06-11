import { Hand } from 'pokersolver';
import { Card, PokerHand, HandRank } from './types';
import { shortCard } from './cards';

export const evaluate = (cards: Card[]): PokerHand => {
    let hand: SolverHand = Hand.solve(cards.map(shortCard));
    return {
        name: hand.name,
        description: hand.descr,
        rank: hand.rank,
        handRank: getHandRank(hand.name)
    };
};

const getHandRank = (name: String): HandRank => {
    switch (name) {
        case 'Straight Flush': return HandRank.STRAIGHT_FLUSH;
        case 'Four of a Kind': return HandRank.FOUR_OF_KIND;
        case 'Full House': return HandRank.FULL_HOUSE;
        case 'Flush': return HandRank.FLUSH;
        case 'Straight': return HandRank.STRAIGHT;
        case 'Three of a Kind': return HandRank.THREEE_OF_KIND;
        case 'Two Pair': return HandRank.TWO_PAIRS;
        case 'Pair': return HandRank.PAIR;
        default: return HandRank.HIGH_CARD;
    }
};

export const displayHandRank = (rank: HandRank): string => {
    switch (rank) {
        case HandRank.STRAIGHT_FLUSH: return 'Straight Flush';
        case HandRank.FOUR_OF_KIND: return 'Four of a Kind';
        case HandRank.FULL_HOUSE: return 'Full House';
        case HandRank.FLUSH: return 'Flush';
        case HandRank.STRAIGHT: return 'Straight';
        case HandRank.THREEE_OF_KIND: return 'Three of a Kind';
        case HandRank.TWO_PAIRS: return 'Two Pair';
        case HandRank.PAIR: return 'Pair';
        default: return 'High card';
    }
};
