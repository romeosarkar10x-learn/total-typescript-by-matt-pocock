interface Attributes {
    id: number;
    firstName: string;
    lastName: string;
    email: `${string}@${string}`;
    dateOfBirth: Date;
    latitude: number;
    longitude: number;
    gender: "male" | "female" | "rather not say";
}

type AttributesTuple<T extends object> = {
    [Key in keyof T]: [Key, T[Key]];
}[keyof T];

type AttributesUnion<T> = T extends [infer Key extends string, infer Value] ? { [K in Key]: Value } : never;

type Y = AttributesTuple<Attributes>;
type Z = AttributesUnion<AttributesTuple<Attributes>>;

type MutuallyExclusive<T extends object> = AttributesTuple<T> extends infer TT
    ? TT extends [infer Key extends string, infer Value] ? { [K in Key]: Value } : never
    : never;

type X = MutuallyExclusive<Attributes>;

type MutuallyExclusive2<T extends object> = {
    [Key in keyof T]: { [X in Key]: T[Key] };
}[keyof T];

type XX = MutuallyExclusive2<Attributes>;
