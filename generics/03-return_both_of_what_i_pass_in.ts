function returnBothOfWhatIPassIn<T, U>(a: T, b: U): { a: T; b: U } {
    return { a, b };
}

const helloAnd1 = returnBothOfWhatIPassIn("hello", 1);
