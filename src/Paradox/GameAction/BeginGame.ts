import { NotEnoughPlayersForGameError } from "../Error/NotEnoughPlayersForGameError";
import { Game } from "../Game";
import { PlayerTeam } from "../PlayerTeam";
import { GameAction } from "./GameAction";

/**
 * Game action that begins the game with the active player.
 */
export class BeginGame extends GameAction {
    changesGameStep: boolean = true;
    changesGamePhase: boolean = true;

    startingTeam: PlayerTeam;

    constructor(startingTeam: PlayerTeam) {
        super();
        this.startingTeam = startingTeam;
    }

    actOnImpl(game: Game): void {
        if (game.state.numStartingPlayers() < 2)
            throw new NotEnoughPlayersForGameError();

        game.state.activeTeam = this.startingTeam;
        game.state.priorityTeam = this.startingTeam;

        // 103.1. At the start of the game, each player shuffles their deck so that the cards
        // are in a random order.
        game.futureActions.push()
    }
}