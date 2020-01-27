import { TurnPhase, TurnStep } from "../GameState";
import { BeginMainPhase } from "./BeginMainPhase";

export class BeginPostcombatMainPhase extends BeginMainPhase {
    readonly phase: TurnPhase.PostcombatMain;
    readonly step: TurnStep.PostcombatMain;
}