module Paradox.GameAction {
    export class PlayerShuffleDeck extends GameAction {
        changesGameStep: boolean = false;
        changesGamePhase: boolean = false;

        randSeed: number;
        player: Player;

        constructor(player: Player) {
            super();
            this.player = player;
        }

        actOnImpl(game: Game): void {
            
        }
    }
}