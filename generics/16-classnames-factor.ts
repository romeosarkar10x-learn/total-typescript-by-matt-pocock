function createClassnamesFactory<T extends string>(classnames: Record<T, string>) {
    return function createClassnames(type: T, ...otherClassnames: string[]): (typeof classnames)[T] {
        const classlist = [classnames[type], ...otherClassnames];
        return classlist.join(" ");
    };
}

const getBg = createClassnamesFactory({
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
});

const primaryColor = getBg("primary");
const secondaryColor = getBg("secondary", "gadha", "dog", "pig", "rat", "rabbit");

// @ts-expect-error
const tertiaryColor = getBg("tertiary");

// @ts-expect-error
const errBg = createClassnamesFactory(123);

console.log("primaryColor: ", primaryColor);
console.log("secondaryColor: ", secondaryColor);
