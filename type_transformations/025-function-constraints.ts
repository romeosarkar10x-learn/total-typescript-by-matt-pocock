type GetParametersAndReturnType<T extends (...args: any) => any> = {
    params: Parameters<T>;
    returnValue: ReturnType<T>;
};

type X = GetParametersAndReturnType<(hello: string, world: number) => Error>;
