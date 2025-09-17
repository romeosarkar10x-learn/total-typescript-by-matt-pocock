function typedObjectKeys<T extends object>(obj: T) {
    return Object.keys(obj) as Array<keyof T>;
}

function typedObjectKeys2<TKey extends string>(obj: Record<TKey, any>) {
    return Object.keys(obj) as Array<TKey>;
}

const result1 = typedObjectKeys({ a: 1, b: "string", c: true });
const result2 = typedObjectKeys2({ a: "string", b: true });
