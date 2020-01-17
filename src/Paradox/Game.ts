namespace Paradox {
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

        pastActions: GameAction.GameAction[];
        futureActions: GameAction.GameAction[];

        constructor(teams: PlayerTeam[]) {
            this.state = new GameState(teams);
        }

        /**
         * Start the game. Returns 
         */
        startGame(startingTeam?: PlayerTeam) : void {
            if (startingTeam == undefined)
                startingTeam = Util.randomElement(this.state.teams);

            this.futureActions.push(new GameAction.BeginGame(startingTeam));
        }
    }
}