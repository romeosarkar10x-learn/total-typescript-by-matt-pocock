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

type EventType = Event["type"];
