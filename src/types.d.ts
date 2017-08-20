type GameName = "hand-reading" | "outs-counting"

interface GameSettings {
    turn: GameTurn;
    rounds: number;
    game: GameName;
}

type CardRank = "2" | "3" | "4" | "5" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A"
type CardSuit = "D" | "H" | "C" | "S" 
type GameTurn = "Flop" | "Turn" | "River"
type HandRank = 'Straight Flush' | 'Four of a Kind' | 'Full House' | 'Flush' | 'Straight' | 'Three of a Kind' | 'Two Pair' | 'Pair' | 'High Card'

interface Card {
    rank: CardRank
    suit: CardSuit
}

type Round = OutsRound | HandRound

interface OutsRound {
    game: "outs-counting"
    community: Card[];
    hand: Card[];
    answer: Card[];
    correctAnswer: number;
    userAnswer?: number;
}

interface HandRound {
    game: "hand-reading"
    community: Card[];
    hand: Card[];
    correctAnswer: HandRank;
    userAnswer?: HandRank;
}

interface PokerHand {
    name: HandRank;
    description: string;
    rank: number;
    handRank: number
}

interface Cards {
    community: Card[];
    player: Card[];
    remaining: Card[];
}
