// ## Card
// Create a class Card. A card object will have 2 properties:

// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.

// A card will be created thus:
// ```js
// > let myCard = new Card(5, 'diamonds')
// ```

// And you can access the individual properties like:
// ```js
// > myCard.point
// 5
// > myCard.suit
// 'diamonds'
// ```

class Card {
    constructor(point, suit) 
    {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png` //reference: https://www.w3schools.com/js/js_object_constructors.asp
    };
}

let myCard = new Card('5', 'diamonds');
let yourCard = new Card('7', 'hearts');

console.log(myCard);
console.log(yourCard);
console.log(myCard.getImageUrl())

export default Card;
