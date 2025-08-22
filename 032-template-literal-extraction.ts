type Names = [
    "Romeo Sarkar",
    "Matt Pocock",
    "Scott Meyers",
];

type GetSurname<T extends string> = T extends `${infer FirstName} ${infer Surname}` ? Surname : never;

type X = GetSurname<Names[0]>;
type Y = GetSurname<Names[1]>;
type Z = GetSurname<Names[2]>;
