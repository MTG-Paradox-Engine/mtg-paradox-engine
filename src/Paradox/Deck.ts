import { Card } from "./Card";

export class Deck {
    cards: Card[];
    sideboard: Card[];
    commander?: Card;
}