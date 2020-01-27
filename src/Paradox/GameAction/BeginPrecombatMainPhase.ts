import { TurnPhase, TurnStep } from "../GameState";
import { BeginMainPhase } from "./BeginMainPhase";

export class BeginPrecombatMainPhase extends BeginMainPhase {
    readonly phase: TurnPhase.PrecombatMain;
    readonly step: TurnStep.PrecombatMain;
}