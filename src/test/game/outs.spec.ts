import * as R from "ramda"
import { getOuts } from "../../game/outs"
import { getNewDeck } from "../../poker/dealer"
import { sortCards, cardsFromShort } from "../../poker/cards"
import * as A from "assert"


describe("Outs counter", () => {

    it("should return remaing two cards for pocket pair", () => {
        let community = cardsFromShort([ "Th", "4c", "Qd" ])
        let player = cardsFromShort(["8c", "8h"])
        let remainingCards = R.difference(getNewDeck(), community.concat(player))
        let expectedOuts = cardsFromShort([ "8d", "8s"])
        let outs = getOuts(community, player, remainingCards)
        A.equal(sortCards(outs), sortCards(expectedOuts))
    })
})
