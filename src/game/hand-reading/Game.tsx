import { dealUnfairCards } from '../../lib/poker/dealer';
import { evaluate } from '../../lib/poker/evaluator';
import * as Cards from '../../lib/cards/cards';

export default function getRound(turn: Cards.GameTurn): Cards.HandRound {
    let cards = dealUnfairCards(turn);
    return {
        game: 'hand-reading',
        community: cards.community,
        hand: cards.player,
        correctAnswer: evaluate(cards.community.concat(cards.player)).name
    };
}
