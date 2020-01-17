module Paradox.GameAction {
    /**
     * Class representing an action that can be taken in a game of Magic.
     */
    export abstract class GameAction {
        actOn(game: Game): void {
            game.pastActions.push(this);

            this.actOnImpl(game);
        }

        abstract actOnImpl(game: Game): void;
    }
}