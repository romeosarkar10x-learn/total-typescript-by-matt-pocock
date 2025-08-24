type Fruit = {
    name: "apple";
    color: "red";
} | {
    name: "banana";
    color: "yellow";
} | {
    name: "orange";
    color: "orange";
}; /*| {
    name: 1;
    color: 2;
};
*/

type TransformFruit<T> = T extends { name: infer Name; color: infer Color }
    ? Name extends string ? Color extends string ? `${Name}:${Color}` : never : never
    : never;

type TransformFruit2<T> = T extends { name: infer Name extends string; color: infer Color extends string }
    ? `${Name}:${Color}`
    : never;

type X = TransformFruit<Fruit>;
type Y = TransformFruit2<Fruit>;

type TransformFruit3<T extends { name: string; color: string }> = keyof {
    [K in T as `${K["name"]}:${K["color"]}`]: undefined;
};

type Z = TransformFruit3<Fruit>;
