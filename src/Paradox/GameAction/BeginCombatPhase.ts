import { Game } from "../Game";
import { TurnPhase, TurnStep } from "../GameState";
import { ChangeTurnStep } from "./ChangeTurnStep";

export class BeginCombatPhase extends ChangeTurnStep {
    readonly phase: TurnPhase.Combat;
    readonly step: TurnStep.BeginCombat;

    actOnImpl2(game: Game): void {
        throw new Error("Method not implemented.");
    }
}