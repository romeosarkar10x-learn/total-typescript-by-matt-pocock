interface Example {
    name: string;
    age: number;
    id: string;
    organizationID: number;
    groupID: number;
}

type OnlyIDKeys<T> = {
    [K in keyof T as K extends `${string}id` ? K : K extends `${string}ID` ? K : never]: T[K];
};

type OnlyIDKeys2<T> = {
    [K in keyof T as K extends `${string}${"id" | "ID"}` ? K : never]: T[K];
};

type Ex = OnlyIDKeys<Example>;
type Ex2 = OnlyIDKeys2<Example>;
