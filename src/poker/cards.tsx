import * as React from 'react';
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
    throw new RangeError("Invalid suit: " + s)
}

const shortSuit = (s: Suit) => {
    switch (s) {
        case Suit.HEARTHS: return "h"
        case Suit.DIAMONDS: return "d"
        case Suit.CLUBS: return "c"
        case Suit.SPADES: return "s"
    }
    throw new RangeError("Invalid suit: " + s)
}

const suitClass = (s: Suit) => {
    switch (s) {
        case Suit.HEARTHS: return "hearts"
        case Suit.DIAMONDS: return "diams"
        case Suit.CLUBS: return "clubs"
        case Suit.SPADES: return "spades"
    }
    throw new RangeError("Invalid suit: " + s)
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
    throw new RangeError("Invalid rank: " + r)
}

const rankFromShort = (r: string): Rank => {
    switch (r) {
        case "2": return Rank.RANK_2 
        case "3": return Rank.RANK_3 
        case "4": return Rank.RANK_4 
        case "5": return Rank.RANK_5 
        case "6": return Rank.RANK_6 
        case "7": return Rank.RANK_7 
        case "8": return Rank.RANK_8 
        case "9": return Rank.RANK_9 
        case "T": return Rank.RANK_10 
        case "J": return Rank.RANK_JACK 
        case "Q": return Rank.RANK_QUEEN 
        case "K": return Rank.RANK_KING 
        case "A": return Rank.RANK_ACE 
    }
    throw new RangeError("Invalid rank: " + r)
}
const suitFromShort = (s: string): Suit => {
    switch (s) {
        case "h": return Suit.HEARTHS
        case "d": return Suit.DIAMONDS
        case "c": return Suit.CLUBS
        case "s": return Suit.SPADES
    }
    throw new RangeError("Invalid suit: " + s)
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
    throw new RangeError("Invalid rank: " + r)
}

export const cardFromShort = (short: string): Card => {
    return {
        rank: rankFromShort(short[0]),
        suit: suitFromShort(short[1])
    }
}

export const cardsFromShort = (shorts: string[]): Card[] => {
    return shorts.map(cardFromShort)
}
