function returnBothOfWhatIPassIn<T, U>(params: { a: T; b: U }): { first: T; second: U } {
    return { first: params.a, second: params.b };
}

const x = returnBothOfWhatIPassIn({ a: "hello", b: 1 });
