type Route = "/" | "/about" | "/home" | "/users" | "/admin" | "/admin/users";

type ObjectRoutes = {
    [X in Route]: X;
};
