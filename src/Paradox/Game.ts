import { BeginGame } from "./Actions/BeginGame";
import { GameAction } from "./Actions/GameAction";
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

    /**
     * Initialize a new game.
     * @param teams Ordered list of player teams. The first element in this list represents the
     * starting player team.
     */
    constructor(teams: PlayerTeam[]) {
        this.state = new GameState(this, teams);
    }

    /**
     * Start the game. 
     */
    run() : void {
        console.log('Game is starting...');
        
    }
}