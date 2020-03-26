import { Color } from "../Core/Color";
import { ManaAmount } from "../Core/ManaAmount";

export class Object {
    manaCost: ManaAmount;
    colors: Color[];

    constructor() {
        this.colors = this.manaCost.getColors();
    }

    getColors(): Color[] {
        // 105.2. An object can be one or more of the five colors, or it can be no color at all. An
        // object is the color or colors of the mana symbols in its mana cost, regardless of the
        // color of its frame. An object’s color or colors may also be defined by a color indicator
        // or a characteristic-defining ability. See rule 202.2.
        return this.manaCost.getColors();
    }

    isMonocolored(): boolean {
        return this.getColors().length == 1;
    }

    isMulticolored(): boolean {
        return this.getColors().length > 1;
    }

    isColorless(): boolean {
        return this.getColors().length == 0;
    }
}