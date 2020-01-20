export class NotEnoughPlayersForGameError extends globalThis.Error {
    constructor() {
        super("Not enough players to start a game!");
        this.name = "NotEnoughPlayersForGameError";
    }
}