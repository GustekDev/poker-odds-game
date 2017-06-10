import * as React from 'react';
import * as R from "ramda"
import { Card, Rank, Suit } from "./types"
import * as classNames from "classnames"

export const displayCard = (card: Card) => {
    let classes = classNames(
        "card", suitClass(card.suit), rankClass(card.rank)
    )
    return (
        <div className={classes} >
            <span className="rank">{displayRank(card.rank)}</span>
            <span className="suit">{displaySuit(card.suit)}</span>
        </div>
    )
}

export const shortCard = (card: Card) => {
    return displayRank(card.rank) + shortSuit(card.suit) 
}

export const displayCards = (cards: Card[]) => {
    return (<div className="playingCards simpleCards">{cards.map(displayCard)}</div>)
}

const displaySuit = (s: Suit) => {
    switch (s) {
        case Suit.HEARTHS: return "\u2665"
        case Suit.DIAMONDS: return "\u2666"
        case Suit.CLUBS: return "\u2663"
        case Suit.SPADES: return "\u2660"
    }
    return "U"
}

const shortSuit = (s: Suit) => {
    switch (s) {
        case Suit.HEARTHS: return "h"
        case Suit.DIAMONDS: return "d"
        case Suit.CLUBS: return "c"
        case Suit.SPADES: return "s"
    }
    return "U"
}

const suitClass = (s: Suit) => {
    switch (s) {
        case Suit.HEARTHS: return "hearts"
        case Suit.DIAMONDS: return "diams"
        case Suit.CLUBS: return "clubs"
        case Suit.SPADES: return "spades"
    }
    return "U"
}

const displayRank = (r: Rank) => {
    switch (r) {
        case Rank.RANK_2: return "2"
        case Rank.RANK_3: return "3"
        case Rank.RANK_4: return "4"
        case Rank.RANK_5: return "5"
        case Rank.RANK_6: return "6"
        case Rank.RANK_7: return "7"
        case Rank.RANK_8: return "8"
        case Rank.RANK_9: return "9"
        case Rank.RANK_10: return "10"
        case Rank.RANK_JACK: return "J"
        case Rank.RANK_QUEEN: return "Q"
        case Rank.RANK_KING: return "K"
        case Rank.RANK_ACE: return "A"
    }
    return "Unknown rank"
}

const rankClass = (r: Rank) => {
    switch (r) {
        case Rank.RANK_2: return "rank-2"
        case Rank.RANK_3: return "rank-3"
        case Rank.RANK_4: return "rank-4"
        case Rank.RANK_5: return "rank-5"
        case Rank.RANK_6: return "rank-6"
        case Rank.RANK_7: return "rank-7"
        case Rank.RANK_8: return "rank-8"
        case Rank.RANK_9: return "rank-9"
        case Rank.RANK_10: return "rank-10"
        case Rank.RANK_JACK: return "rank-j"
        case Rank.RANK_QUEEN: return "rank-q"
        case Rank.RANK_KING: return "rank-k"
        case Rank.RANK_ACE: return "rank-a"
    }
    return "Unknown rank"
}

export const sortCards = (cards: Card[]) => {
    R.sort((c1: Card, c2: Card) => {
        if (c1.rank == c2.rank) {
            return c1.suit - c2.suit;
        }
        return c1.rank - c2.rank;
    })(cards)
}
