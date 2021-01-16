// ## Hand constructor
// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:

// ```js
// > var myHand = new Hand()
// > myHand.addCard(new Card(5, 'diamonds'))
// > myHand.addCard(new Card(13, 'spades'))
// > myHand.getPoints()
// 
class Card {
    constructor(point, suit) 
    {
        this.point = point;
        this.suit = suit;
    }
}

class Hand {
    constructor() 
    {
        this.hand = [];
    }
    addCard(card) {
        this.hand.push(card);
    }
    getPoints() {
        let sum = 0;
        this.hand.forEach(card => 
            sum += card.point)
        return sum;
    }
    
}

const myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.addCard(new Card(1, 'hearts'))
console.log(myHand.getPoints())