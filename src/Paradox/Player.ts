namespace Paradox {
    export class Player {
        gameResult: PlayerGameResult;
        deck: Deck;
        sideboard: Card.Card[]
        startingLifeTotal: number;
        currentLifeTotal: number;
    }
}