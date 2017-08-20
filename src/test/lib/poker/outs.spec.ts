import * as R from "ramda"
import { getOuts } from "../../../lib/poker/outs"
import { getNewDeck } from "../../../lib/poker/dealer"
import { cardsFromShort } from "../../../lib/poker/cards"
import { expect } from "chai"


describe("Outs counter", () => {

    /* no outs test cases */

    it("should return no outs if we have 2 pairs in community cards an can't make it better", () => {
        let community = cardsFromShort([ "Th", "Tc", "Qd", "Qc" ])
        let player = cardsFromShort(["8c", "6h"])
        let expectedOuts: Card[] = []
        runTest(community, player, expectedOuts)
    })

    /* 2 outs test cases */

    it("should return remaing two cards for pocket pair", () => {
        let community = cardsFromShort([ "Th", "4c", "Qd" ])
        let player = cardsFromShort(["8c", "8h"])
        let expectedOuts = cardsFromShort([ "8s", "8d"])
        runTest(community, player, expectedOuts)
    })

    /* 4 outs test cases */

    it("should return valid 4 cards for inside straight", () => {
        let community = cardsFromShort(["4h", "7c", "As", "Jh"])
        let player = cardsFromShort(["5s", "8d"])
        let expectedOuts = cardsFromShort(["6d", "6h", "6c", "6s"])
        runTest(community, player, expectedOuts)
    })

    it("should return 4 outs for two pairs drawing to full house", () => {
        let community = cardsFromShort(["4h", "Tc", "2h", "3d"])
        let player = cardsFromShort(["Ts", "2s"])
        let expectedOuts = cardsFromShort(["Th", "Td", "2c", "2d"])
        runTest(community, player, expectedOuts)
    })

    /* 5 outs test cases */

    it("should return 5 outs for pair, to make set or 2 pairs", () => {
        let community = cardsFromShort([ "Th", "4c", "Qd" ])
        let player = cardsFromShort(["Tc", "8h"])
        let expectedOuts = cardsFromShort([ "Td", "Ts", "8c", "8d", "8s"])
        runTest(community, player, expectedOuts)
    })

    /* 7 outs test cases */

    it("should return 7 outs for set drawing to full house or quads on flop", () => {
        let community = cardsFromShort(["4h", "Tc", "2h"])
        let player = cardsFromShort(["Ts", "Th"])
        let expectedOuts = cardsFromShort(["Td", "2c", "2d", "2s", "4s", "4d", "4c"])
        runTest(community, player, expectedOuts)
    })

    /* 8 outs test cases */

    it("should return valid 8 cards for outside straight", () => {
        let community = cardsFromShort(["4h", "7c", "As", "Jh"])
        let player = cardsFromShort(["5s", "6d"])
        let expectedOuts = cardsFromShort(["3d", "3h", "3c", "3s", "8d", "8h", "8c", "8s"])
        runTest(community, player, expectedOuts)
    })

    /* 9 outs test cases */

    it("should return 9 cards to get a flush", () => {
        let community = cardsFromShort(["4s", "7c", "Ah", "Js"])
        let player = cardsFromShort(["Ts", "2s"])
        let expectedOuts = cardsFromShort(["3s", "5s", "6s", "7s", "8s", "9s", "Qs", "Ks", "As"])
        runTest(community, player, expectedOuts)
    })

    /* 12 outs test cases */

    it("should return valid 12 cards for inside flush straight", () => {
        let community = cardsFromShort(["4d", "8d", "As", "Jh"])
        let player = cardsFromShort(["5d", "7d"])
        let expectedOuts = cardsFromShort([
            "6d", "6h", "6c", "6s", // straight
            "2d", "3d", "9d", "Td", "Jd", "Qd", "Kd", "Ad" // flush
            ])
        runTest(community, player, expectedOuts)
    })

    /* 15 outs test cases */

    it("should return valid 15 cards for outside flush straight", () => {
        let community = cardsFromShort(["4d", "7d", "As", "Jh"])
        let player = cardsFromShort(["5d", "6d"])
        let expectedOuts = cardsFromShort([
            "3d", "3h", "3c", "3s", "8d", "8h", "8c", "8s", // straight
            "2d", "9d", "Td", "Jd", "Qd", "Kd", "Ad" // flush
            ])
        runTest(community, player, expectedOuts)
    })
})


const runTest = (community: Card[], player: Card[], expectedOuts: Card[]) => {
    let remaining = R.difference(getNewDeck(), community.concat(player))
    let outs = getOuts({community, player, remaining})
    expect(outs).to.have.deep.members(expectedOuts)
}
