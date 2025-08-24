type CreateDataShape<T, U> = {
    data: T;
    error: U;
};

type X = CreateDataShape<string, TypeError>;
