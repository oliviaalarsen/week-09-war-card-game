//What do we need for a war card game?

/**
 * Deck
 * - 52 cards (class? object with values?)
    * - 4 suits
    * - 13 values
    * - a way to shuffle
    * - a way to deal
    * - rank (name value)
    *
 * Player (class? game logic?)
 * - hand
 * - score
 * - name
 * 
 * Logic to play the game:
 *  - ways to compare the cards, number values
 *  - create a deck, shuffle, deal
 *  - take turns
 */

// 1. Create a deck of cards
/** Needs:
 * an array to store the cards
 * an array to store all the cards ranks
 * an array to store all the cards suits
 * 
 */

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = [
            "Hearts ♡", "Diamonds ♢", "Clubs ♧", "Spades ♤"
        ];
    }

// Create the deck (method - iterate over the ranks and suits)
// Push the card into the deck (as an object into our constructors this.deck)

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1,
                }             
                this.deck.push(card);
                console.log(card);
            }
       }
     }

// Shuffle the deck (method)
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}

const deck = new Deck
deck.createDeck();
deck.shuffleDeck();

console.log(deck.deck);

//class for a game of war
/**needs:
 * - a deck (instantiated inside of the game class)
 * 
 * - create the deck, shuffle, pass the deck
 * 
 * - players (2 players)
 *  - hand
 *  - score
 *  - name
 * 
 * - logic to play the gamw
 *  - turn based (how many turns?)
 *  - control flow (if statements)
 *  - do the players have a turn yet?
 */

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }

//method to play the game
    /**
     * Pass out cards to players
     * take x amount of turns
     *  - as long as players have cards, or the number of cards they have
     * award points based on card.value
     * log the winner
     */

    playGame() {
        // instantiate a new deck, create a deck, shuffle the deck
        const deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();

        // pass out the cards to the players
        while (deck.deck.length !== 0) {
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }

        // take turns, how many turns?
        for (let i = 0; i < this.player1.hand.length; i++) {

            // conditional logic to award points based on card value
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score++
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 1 wins a point!
                    Current Score: P1: ${this.player1.score} P2: ${this.player2.score}
                    `);
            } else if (this.player1.hand[i].value < this.player2.hand[i].value) {
                this.player2.score++;
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 2 wins a point!
                    Current Score: P1: ${this.player1.score} P2: ${this.player2.score}
                    `);
            } else {
                console.log(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    It's a tie! No points awarded.
                    Current Score: P1: ${this.player1.score} P2: ${this.player2.score}
                    `);
            }
        }

    // log the winner
        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 wins with a score of ${this.player1.score} to ${this.player2.score}!`);
        } else if (this.player1.score < this.player2.score) {
            console.log(`Player 2 wins with a score of ${this.player2.score} to ${this.player1.score}!`);
        } else {
            console.log(`It's a tie! All's fair in love and war.`);
        }

    }

}

const game = new Game();
game.playGame();

