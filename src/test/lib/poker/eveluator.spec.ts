import { assert } from 'chai';
import { cardsFromShort } from '../../../lib/poker/cards';
import { evaluate } from '../../../lib/poker/evaluator';

describe('Hand Evaluator', () => {

    it('should assign correct hand rank', () => {
        // High card
        assert.equal(0, evaluate(cardsFromShort([ 'Jh', '4c', 'Qd', 'Td', '3s' ])).handRank);
        // Pair
        assert.equal(1, evaluate(cardsFromShort([ 'Jh', 'Jc', 'Qd', 'Td', '3s' ])).handRank);
        // Two pairs
        assert.equal(2, evaluate(cardsFromShort([ 'Jh', 'Jc', '3d', 'Td', '3s' ])).handRank);
        // Three of kind
        assert.equal(3, evaluate(cardsFromShort([ '3h', 'Jc', '3d', 'Td', '3s' ])).handRank);
        // Full house
        assert.equal(6, evaluate(cardsFromShort([ '3h', 'Tc', '3d', 'Td', '3s' ])).handRank);
        // Four of kind
        assert.equal(7, evaluate(cardsFromShort([ '3h', 'Jc', '3d', '3d', '3s' ])).handRank);
        // Straight
        assert.equal(4, evaluate(cardsFromShort([ '3h', '5c', '2d', '6d', '4s' ])).handRank);
        // Straight flush
        assert.equal(8, evaluate(cardsFromShort([ '3s', '5s', '2s', '6s', '4s' ])).handRank);
        // Flush
        assert.equal(5, evaluate(cardsFromShort([ '3s', 'Js', '2s', 'As', '4s' ])).handRank);
    });

});
