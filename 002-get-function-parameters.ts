const makeQuery = (
    url: string,
    options?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        body?: string;
    },
) => {};

type ParametersType = Parameters<typeof makeQuery>;
