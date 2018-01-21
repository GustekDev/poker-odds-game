import * as React from 'react';
import * as Cards from '../cards/cards';

export const displayCard = (card: Cards.Card) => {
    return (
        <span className={'playing-card align-middle text-center ' + suitClass(card.suit)}>
            <span className="rank align-middle">{shortRank(card.rank)}</span>
            <span className="suit align-middle">{displaySuit(card.suit)}</span>
        </span>
    );
};

export const shortCard = (card: Cards.Card) => {
    return shortRank(card.rank) + shortSuit(card.suit);
};

export const displayCards = (cards: Cards.Card[]) => {
    return (<div className="playingCards simpleCards">{cards.map(displayCard)}</div>);
};

export const displayCommnityCards = (cards: Cards.Card[]) => {
    return (
        <div className="playingCards simpleCards">
            {cards.map(displayCard)}{renderUnknown(cards.length)}
        </div>
    );
};

const renderUnknown = (dealtCount: number): JSX.Element[] => {
    var cards = [];
    for (let i = 0; i < 5 - dealtCount; i++) {
        cards.push(
            <span className="playing-card align-middle text-center playing-card-unknown">&nbsp;</span>
        );
    }
    return cards;
};

export const displayShortCards = (cards: Cards.Card[]) => {
    return cards.map(shortCard);
};

const displaySuit = (s: Cards.Suit) => {
    switch (s) {
        case Cards.Suit.Hearts: return '\u2665';
        case Cards.Suit.Diamonds: return '\u2666';
        case Cards.Suit.Clubs: return '\u2663';
        case Cards.Suit.Spades: return '\u2660';
        default: return '?';
    }
};

const suitClass = (s: Cards.Suit) => {
    switch (s) {
        case Cards.Suit.Hearts: return 'hearths';
        case Cards.Suit.Diamonds: return 'diamonds';
        case Cards.Suit.Clubs: return 'clubs';
        case Cards.Suit.Spades: return 'spades';
        default: return 'unknown';
    }
};

export const shortSuit = (s: Cards.Suit) => {
    switch (s) {
        case Cards.Suit.Hearts: return 'h';
        case Cards.Suit.Diamonds: return 'd';
        case Cards.Suit.Clubs: return 'c';
        case Cards.Suit.Spades: return 's';
        default: return 'unknown';
    }
};

export const shortRank = (s: Cards.Rank) => {
    switch (s) {
        case Cards.Rank.Ace: return 'A';
        case Cards.Rank.King: return 'K';
        case Cards.Rank.Queen: return 'Q';
        case Cards.Rank.Jack: return 'J';
        case Cards.Rank.Ten: return 'T';
        default: return s;
    }
};

const suitFromShort = (s: string): Cards.Suit => {
    switch (s) {
        case 'h': return Cards.Suit.Hearts;
        case 'd': return Cards.Suit.Diamonds;
        case 'c': return Cards.Suit.Clubs;
        case 's': return Cards.Suit.Spades;
        default:
            throw 'Invalid short suit: ' + s;
    }
};

const rankFromShort = (r: string): Cards.Rank => {
    switch (r) {
        case 'A': return Cards.Rank.Ace;
        case 'K': return Cards.Rank.King;
        case 'Q': return Cards.Rank.Queen;
        case 'J': return Cards.Rank.Jack;
        case 'T': return Cards.Rank.Ten;
        default:
            return parseInt(r, 10) as Cards.Rank;
    }
};

export const cardFromShort = (short: string): Cards.Card => {
    return {
        rank: rankFromShort(short[0]),
        suit: suitFromShort(short[1])
    };
};

export const cardsFromShort = (shorts: string[]): Cards.Card[] => {
    return shorts.map(cardFromShort);
};
