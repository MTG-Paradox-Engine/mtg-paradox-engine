import { Game } from "../Game";
import { GameState } from "../GameState";
import { PlayerTeam } from "../PlayerTeam";
import { Object } from "../Object/Object";
import { Player } from "../Player";
import { GameEvent } from "./GameEvent";

type PlayerTeamEvent = GameEvent<{ (gameState: GameState, playerTeam: PlayerTeam): void }>;
type PlayerEvent = GameEvent<{ (gameState: GameState, player: Player): void }>;
type ObjectEvent = GameEvent<{ (gameState: GameState, object: Object): void }>;

export class GameEvents {
    // Turn phases
    static onTurnStart: PlayerTeamEvent;
    static onUpkeep: PlayerTeamEvent;
    static onPrecombatMain: PlayerTeamEvent;
    static onCombat: PlayerTeamEvent;
    static onPostcombatMain: PlayerTeamEvent;
    static onEndStep: PlayerTeamEvent;
    static onCleanup: PlayerTeamEvent;

    // Player
    static onPlayerDrawCard: { (gameState: GameState, player: Player, numCards: number): void };
    static onPlayerShuffleLibrary: PlayerEvent;

    // Objects
    static onObjectTap: ObjectEvent;
    static onObjectUntap: ObjectEvent;
}