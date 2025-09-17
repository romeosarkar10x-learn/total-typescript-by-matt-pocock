function makeNoexcept<Ts extends unknown[], U>(
    fn: (...args: Ts) => U,
): (...args: Ts) => ({ status: "error"; error: Error }) | { status: "success"; result: U } {
    return function (...args) {
        try {
            return { status: "success", result: fn(...args) };
        } catch (e: unknown) {
            if (e instanceof Error) {
                return { status: "error", error: e };
            } else {
                return { status: "error", error: new Error("Unknown error type") };
            }
        }
    };
}

function foo(a: number, b: boolean, c: string) {
    return [a + c, b + c] as const;
}

const fooNoexcept = makeNoexcept(foo);
const barNoexcept = makeNoexcept(() => 1);

// Named-tuple
