// ## Deck constructor
// A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:

// ```js
// > var myDeck = new Deck()
// > myDeck.draw()
// Card {point: 6, suit: "clubs"}
// > myDeck.draw()
// Card {point: 1, suit: "spades"}
// > myDeck.shuffle()
// > myDeck.numCardsLeft()
// 50
// ```

// Implement a Deck class that will allow for the above code to work.

class Deck {
    constructor() 
    {
        const deck = [];
        const points = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
        const suit = ['spades', 'hearts', 'diamonds', 'clubs']

        for (var i =0; i < points.length; i++) {
            for (var y=0; y < suit.length; y++)
        }
    }
    draw () {
        const randomNumber = Math.floor(Math.random() * 53);

    }
}