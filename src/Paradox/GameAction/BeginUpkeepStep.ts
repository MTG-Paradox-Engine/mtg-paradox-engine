import { Game } from "../Game";
import { TurnPhase, TurnStep } from "../GameState";
import { ChangeTurnStep } from "./ChangeTurnStep";

export class BeginUpkeepStep extends ChangeTurnStep {
    readonly phase: TurnPhase.Beginning;
    readonly step: TurnStep.Upkeep;

    actOnImpl2(game: Game): void {
        // 503. Upkeep Step

        // 503.1. The upkeep step has no turn-based actions. Once it begins, the active player
        // gets priority. (See rule 117, “Timing and Priority.”)
        // TODO

        // 503.1a Any abilities that triggered during the untap step and any abilities that
        // triggered at the beginning of the upkeep are put onto the stack before the active
        // player gets priority; the order in which they triggered doesn’t matter. (See rule
        // 603, “Handling Triggered Abilities.”)
        // TODO
    }
}