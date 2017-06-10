import * as R from "ramda"
import { getOuts } from "../../src/game/outs"
import { Rank, Suit } from "../../src/poker/types"
import { getNewDeck } from "../../src/poker/dealer"
import { sortCards } from "../../src/poker/cards"
import * as A from "assert"


describe("Outs counter", () => {

    it("should return remaing two cards for pocket pair", () => {
        let community = [
            { rank: Rank.RANK_10, suit: Suit.HEARTHS },
            { rank: Rank.RANK_4, suit: Suit.CLUBS },
            { rank: Rank.RANK_QUEEN, suit: Suit.DIAMONDS}
        ]
        let player = [
            { rank: Rank.RANK_8, suit: Suit.CLUBS },
            { rank: Rank.RANK_8, suit: Suit.HEARTHS }
        ]
        let remainingCards = R.difference(getNewDeck(), community.concat(player))
        let expectedOuts = [
            { rank: Rank.RANK_8, suit: Suit.DIAMONDS },
            { rank: Rank.RANK_8, suit: Suit.SPADES }
        ]
        let outs = getOuts(community, player, remainingCards)
        A.equal(sortCards(outs), sortCards(expectedOuts))
    })
})
