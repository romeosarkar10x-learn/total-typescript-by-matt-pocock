type GetDataValue<T> = T extends { data: infer X } ? X : never;

type A = GetDataValue<{ data: boolean }>;
type B = GetDataValue<{ data: "hello" }>;
