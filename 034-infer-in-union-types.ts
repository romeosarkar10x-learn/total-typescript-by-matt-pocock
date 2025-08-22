const parser1 = {
    parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
    extract: () => true,
};

/*
type GetParserResult<T> = T extends { parse: () => infer Ret } ? Ret
    : T extends () => infer Ret ? Ret
    : T extends { extract: () => infer Ret } ? Ret
    : never;
    */

type GetParserResult<T> = T extends ({ parse: () => infer Ret } | (() => infer Ret) | { extract: () => infer Ret })
    ? Ret
    : never;

type A = GetParserResult<typeof parser1>;
type B = GetParserResult<typeof parser2>;
type C = GetParserResult<typeof parser3>;
