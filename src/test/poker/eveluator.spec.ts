import { assert } from "chai"
import { cardsFromShort } from "../../poker/cards"
import { evaluate } from "../../poker/evaluator"
import { HandRank } from "../../poker/types"

describe("Hand Evaluator", () => {

    it("should assign correct hand rank", () => {
        assert.equal(HandRank.HIGH_CARD, evaluate(cardsFromShort([ "Jh", "4c", "Qd", "Td", "3s" ])).handRank)
        assert.equal(HandRank.PAIR, evaluate(cardsFromShort([ "Jh", "Jc", "Qd", "Td", "3s" ])).handRank)
        assert.equal(HandRank.TWO_PAIRS, evaluate(cardsFromShort([ "Jh", "Jc", "3d", "Td", "3s" ])).handRank)
        assert.equal(HandRank.THREEE_OF_KIND, evaluate(cardsFromShort([ "3h", "Jc", "3d", "Td", "3s" ])).handRank)
        assert.equal(HandRank.FULL_HOUSE, evaluate(cardsFromShort([ "3h", "Tc", "3d", "Td", "3s" ])).handRank)
        assert.equal(HandRank.FOUR_OF_KIND, evaluate(cardsFromShort([ "3h", "Jc", "3d", "3d", "3s" ])).handRank)
        assert.equal(HandRank.STRAIGHT, evaluate(cardsFromShort([ "3h", "5c", "2d", "6d", "4s" ])).handRank)
        assert.equal(HandRank.STRAIGHT_FLUSH, evaluate(cardsFromShort([ "3s", "5s", "2s", "6s", "4s" ])).handRank)
        assert.equal(HandRank.FLUSH, evaluate(cardsFromShort([ "3s", "Js", "2s", "As", "4s" ])).handRank)
    })

})
