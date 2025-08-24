interface Values {
    email: string;
    firstName: string;
    lastName: string;
}

type AsUnionOfTuples<T extends object> = {
    [Key in keyof T]: [Key, T[Key]];
}[keyof T];

/*
type ValuesAsTuples = AsTuples<Values>;

type ToUnionOfTuples<T extends object> = AsTuples<T>[keyof AsTuples<T>];
*/

type ValuesAsUnionOfTuples = AsUnionOfTuples<Values>;
