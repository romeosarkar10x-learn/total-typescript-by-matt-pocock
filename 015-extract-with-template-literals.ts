type Routes = "/users" | "/users:id" | "/posts" | "/posts:id" | "/template/:name" | "template/:form-id";

type FilterDynamicRoutes<T> = T extends `${string}:${string}` ? T : never;
type DynamicRoutes = FilterDynamicRoutes<Routes>;
