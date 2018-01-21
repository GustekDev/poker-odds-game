import * as R from 'ramda';
import { evaluate, getHandRank } from '../poker/evaluator';
import { shortSuit } from '../poker/cards';
import * as Cards from '../cards/cards';

export const getOuts = (cards: Cards.Table): Cards.Card[] => {
    let allCards = cards.community.concat(cards.player);
    let handRank = evaluate(allCards);
    var outs: Cards.Card[] = [];
    if (handRank.handRank > getHandRank('High Card')) {
        if (handRank.handRank === getHandRank('Three of a Kind')) {
            outs = getMatchingCards(allCards, cards.remaining);
        } else {
            let maybeOuts = getMatchingCards(cards.player, cards.remaining);
            outs = onlyImprovingCards(allCards, maybeOuts);
        }
    }
    if (handRank.handRank < getHandRank('Straight')) {
        outs = outs.concat(checkForStraights(cards));
    }
    let flushDrawSuit = isFlushDraw(cards.community, cards.player);
    if (flushDrawSuit !== undefined) {
        outs = outs.concat(R.filter((c: Cards.Card) => c.suit === flushDrawSuit, cards.remaining));
    }
    return outs;
};

const getMatchingCards = (hand: Cards.Card[], remainingCards: Cards.Card[]): Cards.Card[] => {
    let outs = [];
    let handRanks = hand.map((c) => c.rank);
    for (let card of remainingCards) {
        if (R.contains(card.rank, handRanks)) {
            outs.push(card);
        }
    }
    return outs;
};

const onlyImprovingCards = (currentCards: Cards.Card[], potentialOuts: Cards.Card[]): Cards.Card[] => {
    let currentRank = evaluate(currentCards);
    return R.filter((c: Cards.Card) => {
        return evaluate(R.append(c, currentCards)).rank > currentRank.rank;
    })(potentialOuts);
};

const isFlushDraw = (community: Cards.Card[], hand: Cards.Card[]): Cards.Suit | undefined => {
    let suitsCount: {[suit: string]: number} = R.countBy((c: Cards.Card) => shortSuit(c.suit), community.concat(hand));
    let drawingSuitCard = R.find((c: Cards.Card) => {
        return R.prop(shortSuit(c.suit), suitsCount) === 4;
    })(hand);
    return drawingSuitCard ? drawingSuitCard.suit : undefined;
};

const checkForStraights = (cards: Cards.Table): Cards.Card[] => {
    let allCards = cards.community.concat(cards.player);
    var outs = [];
    for (let card of cards.remaining) {
        let rank = evaluate(R.append(card, allCards));
        if (rank.handRank === getHandRank('Straight')) {
            outs.push(card);
        }
    }
    return outs;
};
