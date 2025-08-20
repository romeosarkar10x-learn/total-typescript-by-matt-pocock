async function foo() {
    return {
        isOkay: true,
        payload: {
            rate: 12,
            id: "1",
        },
    };
}

type ResultType = Awaited<ReturnType<typeof foo>>;
