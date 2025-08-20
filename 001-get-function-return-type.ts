const foo = function () {
    return "Hello";
};

function bar() {
    return 2;
}

type FooReturn = ReturnType<typeof foo>;
type BarReturn = ReturnType<typeof bar>;
