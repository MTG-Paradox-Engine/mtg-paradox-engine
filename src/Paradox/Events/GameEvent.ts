export class GameEvent<HandlerT extends CallableFunction> {
    private handlers: HandlerT[];

    subscribe(handler: HandlerT) {
        this.handlers.push(handler);
    }

    unsubscribe(handler: HandlerT) {
        this.handlers = this.handlers.filter(h => h !== handler);
    }

    fire() {
        this.handlers.forEach(h => h());
    }
}