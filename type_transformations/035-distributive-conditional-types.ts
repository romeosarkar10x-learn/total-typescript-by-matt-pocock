type Fruit = "apple" | "banana" | "orange";
type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;
// When TypeScript checks if a union type A extends union type B, it's asking "Is every possible value of A also a valid value of B?"

type Filter<T, U> = T extends U ? T : never;
type AppleOrBananaType = Filter<Fruit, "apple" | "banana">;

type AppleOrBananaTypeAgain = Fruit extends infer T ? T extends "apple" | "banana" ? T : never : never;
