const routes = {
    home: "/home",
    admin: "/admin",
    login: "/login",
    "sign-up": "/sign-up",
} as const;

type Routes = typeof routes[keyof typeof routes];
