interface UserInfo {
    firstName: string;
    lastName: string;
    age: number;
    gender: "male" | "female" | "none";
    dateOfBirth: Date;
    gmail: `${string}@gmail.com`;
}

// type RemoveFirstLetter<S extends string> =

// type CapitalizeFirstLetter<S extends string> = `${Uppercase<S[0]>}${RemoveFirstLetter<S>}`;

// type Getter<M extends string> = `get${M}`;

// type UppercaseFirstCharacter<T extends string> = T extends `${T[0]}${T[1]}` ?
type X = "a" | "b" | "c";
type Y = "1" | "2";
type Z = `${X}${Y}`;

// type T0 = X[];

type AttributeGetters<T> = {
    [K in (keyof T) as K extends string ? `get${Capitalize<K>}` : never]: () => T[K];
};

/*
type AttributeGetters2<T> = {
    [K in (keyof T) as `get${Capitalize<K>}`]: () => T[K];
};
Object keys (represented by keyof T) can be of three different types: string, number, or symbol. This is why K has the type string | number | symbol.
*/

type UserInfoAttributeGetters = {
    [K in keyof UserInfo as `get${Capitalize<K>}`]: () => UserInfo[K];
};

type UserInfoAttributeGettersAgain = AttributeGetters<UserInfo>;
