namespace Paradox {
    /**
     * Enum representing a phase within a single turn.
     */
    export enum TurnPhase {
        Beginning,
        PrecombatMain,
        Combat,
        PostcombatMain,
        Ending
    }
    
    /**
     * Enum representing a step within a phase.
     */
    export enum TurnStep {
        Untap,
        Upkeep,
        Draw,
        PrecombatMain,
        BeginCombat,
        DeclareAttackers,
        DeclareBlockers,
        CombatDamage,
        EndCombat,
        PostcombatMain,
        End,
        Cleanup
    }

    /**
     * Class representing the state of the game at a given decision point. Includes everything
     * needed to reconstruct the game up to this point, including a list of actions that have been
     * taken in the game.
     */
    export class GameState {
        game: Game;
        teams: PlayerTeam[];
        activeTeam?: PlayerTeam;
        priorityTeam?: PlayerTeam;

        currentPhase: TurnPhase;
        currentStep: TurnStep;

        constructor(game: Game, teams: PlayerTeam[]) {
            this.game = game;
            this.teams = teams;
        }

        /**
         * Number of players that were present when this game started.
         */
        numStartingPlayers() : number {
            return this.teams.flat().length;
        }
    
        /**
         * List of players that are currently participating in the game.
         */
        activePlayers() : Player[] {
            return this.teams.flat().filter(p => p.gameResult === PlayerTeamGameResult.Playing);
        }
    
        /**
         * Is this a multiplayer game?
         * 
         * 100.1b: A multiplayer game is a game that begins with more than two players.
         */
        isMultiplayer() : boolean {
            return this.teams.flat().length > 2;
        }

        /**
         * The team that the given player is associated with.
         */
        getTeamForPlayer(player: Player) : PlayerTeam | undefined {
            return this.teams.find(team => team.players.includes(player));
        }
    }
}