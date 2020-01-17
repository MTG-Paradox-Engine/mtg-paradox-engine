namespace Paradox {
    export class Deck {
        cards: Card.Card[];
        sideboard: Card.Card[];
        commander?: Card.Card;

        shuffle() {
            Util.shuffle(this.cards);
        }
    }
}