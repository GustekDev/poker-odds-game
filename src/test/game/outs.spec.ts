import * as R from "ramda"
import { getOuts } from "../../game/outs"
import { getNewDeck } from "../../poker/dealer"
import { sortCards, cardsFromShort } from "../../poker/cards"
import { Card } from "../../poker/types"
import * as A from "assert"


describe("Outs counter", () => {

    it("should return remaing two cards for pocket pair", () => {
        let community = cardsFromShort([ "Th", "4c", "Qd" ])
        let player = cardsFromShort(["8c", "8h"])
        let expectedOuts = cardsFromShort([ "8d", "8s"])
        runTest(community, player, expectedOuts)
    })

    it("should return valid 4 cards for inside straight", () => {
        let community = cardsFromShort(["4h", "7c", "As", "Jh"])
        let player = cardsFromShort(["5s", "8d"])
        let expectedOuts = cardsFromShort(["6d", "6h", "6c", "6s"])
        runTest(community, player, expectedOuts)
    })

    it("should return valid 8 cards for outside straight", () => {
        let community = cardsFromShort(["4h", "7c", "As", "Jh"])
        let player = cardsFromShort(["5s", "6d"])
        let expectedOuts = cardsFromShort(["3d", "3h", "3c", "3s", "8d", "8h", "8c", "8s"])
        runTest(community, player, expectedOuts)
    })
})


const runTest = (community: Card[], player: Card[], expectedOuts: Card[]) => {
    let remainingCards = R.difference(getNewDeck(), community.concat(player))
    let outs = getOuts(community, player, remainingCards)
    A.equal(sortCards(outs), sortCards(expectedOuts))
}
