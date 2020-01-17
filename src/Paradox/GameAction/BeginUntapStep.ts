module Paradox.GameAction {
    export class BeginUntapStep extends ChangeTurnStep {
        readonly phase: TurnPhase = TurnPhase.Beginning;
        readonly step: TurnStep = TurnStep.Untap;

        actOnImpl2(game: Game): void {
            // 502. Untap Step

            // 502.1. First, all phased-in permanents with phasing that the active player controls
            // phase out, and all phased-out permanents that the active player controlled when they
            // phased out phase in. This all happens simultaneously. This turn-based action doesn’t
            // use the stack. See rule 702.25, “Phasing.”
            // TODO

            // 502.2. Second, the active player determines which permanents they control will untap.
            // Then they untap them all simultaneously. This turn-based action doesn’t use the
            // stack. Normally, all of a player’s permanents untap, but effects can keep one or more
            // of a player’s permanents from untapping.
            // TODO

            // 502.3. No player receives priority during the untap step, so no spells can be cast or
            // resolve and no abilities can be activated or resolve. Any ability that triggers
            // during this step will be held until the next time a player would receive priority,
            // which is usually during the upkeep step. (See rule 503,“Upkeep Step.”)
            // TODO
        }
    }
}