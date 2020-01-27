import { Game } from "../Game";
import { TurnPhase, TurnStep } from "../GameState";
import { GameAction } from "./GameAction";

export abstract class ChangeTurnStep extends GameAction {
    abstract readonly phase: TurnPhase;
    abstract readonly step: TurnStep;

    actOnImpl(game: Game): void {
        game.state.currentPhase = this.phase;
        game.state.currentStep = this.step;

        this.actOnImpl2(game);
    }

    abstract actOnImpl2(game: Game): void;
}