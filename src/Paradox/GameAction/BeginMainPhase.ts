import { Game } from "../Game";
import { TurnPhase } from "../GameState";
import { ChangeTurnStep } from "./ChangeTurnStep";

export abstract class BeginMainPhase extends ChangeTurnStep {
    actOnImpl2(game: Game): void {
        // 505. Main Phase

        // 505.4. ...if the active player controls one or more Saga enchantments and it’s the active
        // player’s precombat main phase, the active player puts a lore counter on each Saga they
        // control. (See rule 714, “Saga Cards.”) This turn-based action doesn’t use the stack.
        if (this.phase == TurnPhase.PrecombatMain) {
            // TODO
        }

        // 505.5. ...the active player gets priority. (See rule 117, “Timing and Priority.”)
        // TODO

        // 505.5a The main phase is the only phase in which a player can normally cast artifact,
        // creature, enchantment, planeswalker, and sorcery spells. The active player may cast these
        // spells.
        // 505.5b During either main phase, the active player may play one land card from
        // their hand if the stack is empty, if the player has priority, and if they haven’t played
        // a land this turn (unless an effect states the player may play additional lands). This
        // action doesn’t use the stack. Neither the land nor the action of playing the land is a
        // spell or ability, so it can’t be countered, and players can’t respond to it with instants
        // or activated abilities. (See rule 305, “Lands.”)

        // 505.2. The main phase has no steps, so a main phase ends when all players pass in
        // succession while the stack is empty. (See rule 500.2.)
        // TODO
    }
}