type UserPath = "/users/:id";
type UserOrganizationPath = "/users/:id/organizations/:organizationID";

// type PathToKey

type Split<S extends string> = S extends `${infer First}/${infer Rest}` ? First | Split<Rest> : S;
type Filter<T extends string> = T extends `:${infer Var}` ? Var : never;

type ExtractPathParams<T extends string> = {
    [Key in Filter<Split<T>>]: string;
};

// type P = Filter<Split<UserOrganizationPath>>;

type X = ExtractPathParams<UserPath>;
type Y = ExtractPathParams<UserOrganizationPath>;
