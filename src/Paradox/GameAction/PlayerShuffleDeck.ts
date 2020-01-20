import { Game } from "../Game";
import { Player } from "../Player";
import { GameAction } from "./GameAction";

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