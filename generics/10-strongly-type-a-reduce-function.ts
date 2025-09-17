const array: Record<"name", string>[] = [
    { name: "John" },
    { name: "Romeo" },
    { name: "Matt" },
];

/*
const obj = array.reduce<Record<string, { name: string }>>(
    (previous: Record<"name", string>, current: Record<"name", string>): Record<string, { name: string }> => {
        previous[current.name] = name;
        return previous;
    },
    {},
);
*/

const obj = array.reduce<Record<string, { name: string }>>((accumulator, current) => {
    accumulator[current.name] = current;
    return accumulator;
}, {});

// Record<string, { name: string }>
