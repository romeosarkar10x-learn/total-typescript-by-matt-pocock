interface MyComplexInterface<Event, Context, Name, Point> {
    getEvent: () => Event;
    getContext: () => Context;
    getName: () => Name;
    getPoint: () => Point;
}

type Example = MyComplexInterface<
    "click",
    "window",
    "my-event",
    { x: 1; y: 2 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer X> ? X : never;

type X = GetPoint<Example>;
