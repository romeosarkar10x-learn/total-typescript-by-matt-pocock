type AddRoutePrefix<T extends string> = `/${T}`;

type X = AddRoutePrefix<"about">;
type Y = AddRoutePrefix<"about/team">;
type Z = AddRoutePrefix<"blog">;
