export class UnknownManaSymbolError extends Error {
    constructor(symbol: string) {
        super(`Unknown mana symbol '${symbol}' encountered while parsing mana string.`);
        this.name = "UnknownManaSymbolError";
    }
}