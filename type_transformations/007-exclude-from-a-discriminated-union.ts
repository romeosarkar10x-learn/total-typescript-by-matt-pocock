interface MouseEvent {
    trigger: "mouse";
}

interface FocusEvent {
    trigger: "mouse";
}

interface KeyboardEvent {
    trigger: "keyboard";
}

export type Event = {
    type: "click";
    event: MouseEvent;
} | {
    type: "focus";
    event: FocusEvent;
} | {
    type: "onkeydown";
    event: KeyboardEvent;
};

type Filter<T extends Event, Filter extends Event["type"]> = T extends { type: Filter } ? never : T["event"];

type NonKeyDownEvents = Filter<Event, "onkeydown">;
