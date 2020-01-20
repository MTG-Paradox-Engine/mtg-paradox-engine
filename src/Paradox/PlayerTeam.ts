import { Player } from "./Player";

/**
 * The result of a player team within a game.
 */
export enum PlayerTeamGameResult {
    Playing,
    Lost,
    Won
}

/**
 * Class representing a team of players. A team can refer to a single player, or multiple
 * players in a multiplayer, team-based game.
 */
export class PlayerTeam {
    players: Player[];
    gameResult: PlayerTeamGameResult;
    startingLifeTotal: number;
    currentLifeTotal: number;
}