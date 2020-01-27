import { ImbalancedBraceError } from "../Error/ImbalancedBraceError";
import { UnknownManaSymbolError } from "../Error/UnknownManaSymbolError";

/**
 * Class representing an amount of mana.
 */
export class ManaAmount {
    public hasXCost: boolean = false;

    public generic: number;

    public colorless: number;
    public white: number;
    public blue: number;
    public black: number;
    public red: number;
    public green: number;

    public hybridWhiteBlue: number;
    public hybridWhiteBlack: number;
    public hybridBlueBlack: number;
    public hybridBlueRed: number;
    public hybridBlackRed: number;
    public hybridBlackGreen: number;
    public hybridRedGreen: number;
    public hybridRedWhite: number;
    public hybridGreenWhite: number;
    public hybridGreenBlue: number;

    public hybridMonoWhite: number;
    public hybridMonoBlue: number;
    public hybridMonoBlack: number;
    public hybridMonoRed: number;
    public hybridMonoGreen: number;

    public phyrexianGeneric: number;

    public phyrexianWhite: number;
    public phyrexianBlue: number;
    public phyrexianBlack: number;
    public phyrexianRed: number;
    public phyrexianGreen: number;

    public snow: number;

    /**
     * Get a ManaAmount from a mana string, using textual symbols.
     * @param manaString Mana string to convert to a ManaAmount.
     */
    public static fromString(manaString: string): ManaAmount {
        let manaAmount: ManaAmount = {} as ManaAmount;

        let symbols = manaString
            .split("{")
            .map((s, i) => {
                if (!s.endsWith("}")) {
                    throw new ImbalancedBraceError(manaString, i);
                }

                const symbolArr = s.split("}");
                if (symbolArr.length !== 1) {
                    throw new ImbalancedBraceError(manaString, i);
                }

                return symbolArr[0];
            });

        for (let symbol of symbols) {
            manaAmount.addFromSymbol(symbol);
        }

        return manaAmount;
    }

    /**
     * Get the converted mana cost of this mana amount.
     */
    public asConvertedManaCost(): number {
        return this.generic + this.colorless + this.white + this.blue + this.black + this.red + this.green
            + this.hybridWhiteBlue + this.hybridWhiteBlack + this.hybridBlueBlack + this.hybridBlueRed + this.hybridBlackRed
            + this.hybridBlackGreen + this.hybridRedGreen + this.hybridRedWhite + this.hybridGreenWhite + this.hybridGreenBlue
            + this.hybridMonoWhite + this.hybridMonoBlue + this.hybridMonoBlack + this.hybridMonoRed + this.hybridMonoGreen
            + this.phyrexianGeneric + this.phyrexianWhite + this.phyrexianBlue + this.phyrexianBlack + this.phyrexianRed + this.phyrexianGreen
            + this.snow;
    }

    /**
     * Add an amount of mana based on a symbol.
     * @param symbol Symbol of mana to add to this amount.
     */
    public addFromSymbol(symbol: string) {
        // 107.4. The mana symbols are {W}, {U}, {B}, {R}, {G}, and {C}; the numerical symbols {0},
        // {1}, {2}, {3}, {4}, and so on; the variable symbol {X}; the hybrid symbols {W/U}, {W/B},
        // {U/B}, {U/R}, {B/R}, {B/G}, {R/G}, {R/W}, {G/W}, and {G/U}; the monocolored hybrid
        // symbols {2/W}, {2/U}, {2/B}, {2/R}, and {2/G}; the Phyrexian mana symbols {W/P}, {U/P},
        // {B/P}, {R/P}, and {G/P}; and the snow symbol {S}.

        switch (symbol) {
            // 107.4a There are five primary colored mana symbols: {W} is white, {U} blue, {B}
            // black, {R} red, and {G} green. These symbols are used to represent colored mana,
            // and also to represent colored mana in costs. Colored mana in costs can be paid
            // only with the appropriate color of mana. See rule 202, “Mana Cost and Color.”
            case "W":
                this.white += 1;
                break;
            case "U":
                this.blue += 1;
                break;
            case "B":
                this.black += 1;
                break;
            case "R":
                this.red += 1;
                break;
            case "G":
                this.green += 1;
                break;

            // 107.4c The colorless mana symbol {C} is used to represent one colorless mana, and
            // also to represent a cost that can be paid only with one colorless mana.
            case "C":
                this.colorless += 1;
                break;

            // 107.4e Hybrid mana symbols are also colored mana symbols. Each one represents a
            // cost that can be paid in one of two ways, as represented by the two halves of the
            // symbol. A hybrid symbol such as {W/U} can be paid with either white or blue mana,
            // and a monocolored hybrid symbol such as {2/B} can be paid with either one black
            // mana or two mana of any type. A hybrid mana symbol is all of its component colors
            case "W/U":
                this.hybridWhiteBlue += 1;
                break;
            case "W/B":
                this.hybridWhiteBlack += 1;
                break;
            case "U/B":
                this.hybridBlueBlack += 1;
                break;
            case "U/R":
                this.hybridBlueRed += 1;
                break;
            case "B/R":
                this.hybridBlackRed += 1;
                break;
            case "B/G":
                this.hybridBlackGreen += 1;
                break;
            case "R/G":
                this.hybridRedGreen += 1;
                break;
            case "R/W":
                this.hybridRedWhite += 1;
                break;
            case "G/W":
                this.hybridGreenWhite += 1;
                break;
            case "G/U":
                this.hybridGreenBlue += 1;
                break;
            case "2/W":
                this.hybridMonoWhite += 1;
                break;
            case "2/U":
                this.hybridMonoBlue += 1;
                break;
            case "2/B":
                this.hybridMonoBlack += 1;
                break;
            case "2/R":
                this.hybridMonoRed += 1;
                break;
            case "2/G":
                this.hybridMonoGreen += 1;
                break;

            // 107.4f Phyrexian mana symbols are colored mana symbols: {W/P} is white, {U/P} is
            // blue, {B/P} is black, {R/P} is red, and {G/P} is green. A Phyrexian mana symbol
            // represents a cost that can be paid either with one mana of its color or by paying
            // 2 life.
            case "W/P":
                this.phyrexianWhite += 1;
                break;
            case "U/P":
                this.phyrexianBlue += 1;
                break;
            case "B/P":
                this.phyrexianBlack += 1;
                break;
            case "R/P":
                this.phyrexianRed += 1;
                break;
            case "G/P":
                this.phyrexianGreen += 1;
                break;

            // 107.4g In rules text, the Phyrexian symbol {P} with no colored background means
            // any of the five Phyrexian mana symbols.
            case "P":
                this.phyrexianGeneric += 1;
                break;

            // 107.4h The snow mana symbol {S} represents one mana in a cost. This mana can be
            // paid with one mana of any type produced by a snow permanent (see rule 205.4g).
            // Effects that reduce the amount of generic mana you pay don’t affect {S} costs.
            // Snow is neither a color nor a type of mana.
            case "S":
                this.snow += 1;
                break;
            
            // 107.4b Numerical symbols (such as {1}) and variable symbols (such as {X})
            // represent generic mana in costs. Generic mana in costs can be paid with any type
            // of mana. For more information about {X}, see rule 107.3.
            case "X":
                this.hasXCost = true;
                break;
            default:
                const amount = parseInt(symbol, 10);
                if (isNaN(amount)) {
                    throw new UnknownManaSymbolError(symbol);
                }
                this.generic += amount;
                break;
        }
    }
}