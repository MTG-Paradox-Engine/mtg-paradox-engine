import { Card } from "./Card/Card";

export class Deck {
    cards: Card[];
    sideboard: Card[];
    commander?: Card;
}