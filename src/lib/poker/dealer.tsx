import { evaluate, getHandRank } from './evaluator';
import * as Cards from '../cards/cards';
import * as Game from './game';

export const dealCards = (turn: Game.GameTurn): Cards.Table => {
  let cards = shuffle(getNewDeck());
  var communityCount = 3;
  switch (turn) {
    case 'Flop':
      communityCount = 3;
      break;
    case 'Turn':
      communityCount = 4;
      break;
    case 'River':
      communityCount = 5;
      break;
    default:
      communityCount = 3;
  }
  return {
    player: cards.slice(0, 2),
    community: cards.slice(2, 2 + communityCount),
    remaining: cards.slice(2 + communityCount)
  };
};

export const dealUnfairCards = (turn: Game.GameTurn): Cards.Table => {
  var cards = dealCards(turn);
  var attempt = 0;
  while (
    evaluate(cards.community.concat(cards.player)).handRank ===
    getHandRank('High Card') &&
    attempt < 10
  ) {
    cards = dealCards(turn);
    attempt++;
  }
  return cards;
};

export const getNewDeck = (): Cards.Deck => {
  let cards: Cards.Card[] = [];
  for (var rank = Cards.Rank.Two; rank <= Cards.Rank.Ace; rank++) {
    for (var suit = Cards.Suit.Spades; suit <= Cards.Suit.Hearts; suit++) {
      cards.push({ suit, rank });
    }
  }
  return cards;
};

const shuffle = (cards: Cards.Deck) => {
  var currentIndex = cards.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
};
