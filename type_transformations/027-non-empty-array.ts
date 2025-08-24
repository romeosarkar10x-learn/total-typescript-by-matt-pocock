type NonEmptyArray<T> = [T, ...T[]];

function makeEnum(values: NonEmptyArray<string>): undefined {}

// makeEnum([]);
makeEnum(["a"]);
makeEnum(["a", "b"]);
