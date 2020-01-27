import { Game } from "../Game";
import { ChangeTurnStep } from "./ChangeTurnStep";
import { TurnPhase, TurnStep } from "../GameState";

export class BeginDrawStep extends ChangeTurnStep {
    readonly phase: TurnPhase.Beginning;
    readonly step: TurnStep.Draw;
    
    actOnImpl2(game: Game): void {
        // 504. Draw Step

        // 504.1. First, the active player draws a card. This turn-based action doesn’t use the
        // stack.
        // TODO

        // 504.2. Second, the active player gets priority. (See rule 117, “Timing and Priority.”)
        // TODO
    }
}