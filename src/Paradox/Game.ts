namespace Paradox {
    /**
     * Class representing a single game of Magic. This class controls the entire game state, transitions
     * between game phases, and interactions between game objects.
     */
    export class Game {
        players: Player[];
        activePlayer: Player;

        constructor(players: Player[]) {
            if (players.length < 2)
                throw new Error.NotEnoughPlayersForGameError();
            this.players = players;
            this.activePlayer = players[0];
        }
    
        /**
         * Get the number of players that were present when this game started.
         */
        numStartingPlayers() : number {
            return this.players.length;
        }
    
        /**
         * Get the number of players that are currently participating in the game.
         */
        numActivePlayers() : number {
            return this.players.filter(p => p.gameResult === PlayerGameResult.Playing).length;
        }
    
        /**
         * Get the winners of this game. If the game is still in progress, this will return an empty
         * list.
         */
        gameWinners() : Player[] {
            return this.players.filter(p => p.gameResult === PlayerGameResult.Won);
        }
    
        /**
         * Is this a multiplayer game?
         * 
         * 100.1b: A multiplayer game is a game that begins with more than two players.
         */
        isMultiplayer() {
            return this.players.length > 2;
        }
    }
}