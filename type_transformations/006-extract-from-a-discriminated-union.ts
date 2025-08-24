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

type ExtractType<T, Filter> = T extends Filter ? T : never;

type ClickEvent = ExtractType<Event, { type: "click" }>;
type OnKeyDownEvent = Extract<Event, { type: "onkeydown" }>;

type Letters = "a" | "b" | "c" | "d";
type LettersWithoutX<T, X> = T extends X ? never : T;

type LettersWithoutC = LettersWithoutX<Letters, "c">;

type ExtractTypeMod<T extends Event, Filter extends (Event)["type"]> = T extends { type: Filter } ? T["event"] : never;

type Answer = ExtractTypeMod<Event, "click">;
type Answer2 = ExtractTypeMod<Event, "click" | "focus">;
