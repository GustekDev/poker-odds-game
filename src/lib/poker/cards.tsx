import * as React from 'react';

export const displayCard = (card: Card) => {
    return (
        <span>
            <span className="rank">{card.rank}</span>
            <span className="suit">{displaySuit(card.suit)}</span>
        </span>
    );
};

export const shortCard = (card: Card) => {
    return card.rank + shortSuit(card.suit) ;
};

export const displayCards = (cards: Card[]) => {
    return (<div className="playingCards simpleCards">{cards.map(displayCard)}</div>);
};

export const displayCommnityCards = (cards: Card[]) => {
    return (<div className="playingCards simpleCards">{cards.map(displayCard)}{renderUnknown(cards.length)}</div>);
};

const renderUnknown = (dealtCount: number): JSX.Element[] => {
    var cards = [];
    for (let i = 0; i < 5 - dealtCount; i++) {
        cards.push(<span>[]</span>);
    }
    return cards;
};

export const displayShortCards = (cards: Card[]) => {
    return cards.map(shortCard);
};

const displaySuit = (s: CardSuit) => {
    switch (s) {
        case 'H': return '\u2665';
        case 'D': return '\u2666';
        case 'C': return '\u2663';
        case 'S': return '\u2660';
        default: return '?';
    }
};

export const shortSuit = (s: CardSuit) => s.toLowerCase();

export const cardFromShort = (short: string): Card => {
    return {
        rank: short[0] as CardRank,
        suit: short[1].toUpperCase() as CardSuit
    };
};

export const cardsFromShort = (shorts: string[]): Card[] => {
    return shorts.map(cardFromShort);
};
