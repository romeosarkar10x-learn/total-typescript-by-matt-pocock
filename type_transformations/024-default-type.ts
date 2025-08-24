type CreateDataShape<T = string, U = Error> = {
    data: T;
    error: U;
};

type X = CreateDataShape;
