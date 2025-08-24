interface FruitMap {
    apple: "red";
    banana: "yellow";
    orange: "orange";
    1: "hello";
}

type TransformFruit<T extends object> = {
    [Key in keyof T]: Key extends string ? T[Key] extends string ? `${Key}:${T[Key]}` : never : never;
}[keyof T];

type X = TransformFruit<FruitMap>;

/*
type ZZZ<T> = [keyof T];

type Z = ZZZ<FruitMap>;
*/
