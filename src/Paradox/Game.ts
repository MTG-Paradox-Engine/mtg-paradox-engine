import { BeginGame } from "./GameAction/BeginGame";
import { GameAction } from "./GameAction/GameAction";
import { GameState } from "./GameState";
import { PlayerTeam } from "./PlayerTeam";
import { randomElement } from "./Util/Random";

export enum GameType {
    Constructed,
    Limited,
    Brawl,
    Commander
}

/**
 * Class representing a single game of Magic. This class controls the entire game state, transitions
 * between game phases, and interactions between game objects.
 */
export class Game {
    state: GameState;

    pastActions: GameAction[];
    futureActions: GameAction[];

    constructor(teams: PlayerTeam[]) {
        this.state = new GameState(this, teams);
    }

    /**
     * Start the game. Returns 
     */
    startGame(startingTeam?: PlayerTeam) : void {
        if (startingTeam == undefined)
            startingTeam = randomElement(this.state.teams);

        this.futureActions.push(new BeginGame(startingTeam));
    }
}