type Route =
    | {
        "route": "/";
        "search": {
            "page": string;
            "perPage": string;
        };
    }
    | { "route": "/about" }
    | {
        "route": "/admin";
        search: { "username": string; "password": string };
    }
    | {
        "route": "/admin/users";
        search: { "username": string };
    };

type GenerateRoutesObject<T extends { route: string }> = {
    [K in T as K["route"]]: K extends { search: infer Search } ? Search : never;
};

type RoutesObject = GenerateRoutesObject<Route>;
