function onlyTakeStrings<T extends string>(str: T): T {
    return str;
}

onlyTakeStrings("hello");

// @ts-expect-error
onlyTakeStrings(true);

// @ts-expect-error
onlyTakeStrings(1);

// @ts-expect-error
onlyTakeStrings(null);
