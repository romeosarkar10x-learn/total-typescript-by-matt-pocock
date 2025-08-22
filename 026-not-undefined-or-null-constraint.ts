type Maybe<T extends {}> = T | null | undefined;

// type A = Maybe<null>;
type B = Maybe<boolean>;
// type C = Maybe<undefined>;
type D = Maybe<string>;
type E = Maybe<"1">;
type F = Maybe<0>;
