type Route =
    | {
        "route": "/";
        "search": {
            "page": string;
            "perPage": string;
        };
    }
    | { "route": "/about"; search: {} }
    | {
        "route": "/admin";
        search: { "username": string; "password": string };
    }
    | {
        "route": "/admin/users";
        search: { "username": string };
    };

type GenerateRoutesObject<T extends { route: string; search: object }> = {
    [K in T as K["route"]]: K["search"];
};

type RoutesObject = GenerateRoutesObject<Route>;
