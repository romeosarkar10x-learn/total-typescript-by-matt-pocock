const testingFrameworks = {
    vitest: {
        label: "Vitest",
    },
    jest: {
        label: "Jest",
    },
    mocha: {
        label: "Mocha",
    },
};

type TestingKeys = keyof typeof testingFrameworks;
type X = keyof number; // "toString" | "toFixed" | ...
