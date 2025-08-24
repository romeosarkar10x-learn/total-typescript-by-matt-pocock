type Route = `/${string}`;

function goToRoute(route: Route): void {}

goToRoute("/users");
goToRoute("/hello");

// goToRoute("users/");
// goToRoute("route");

type Num = `${number}`;

function check(n: Num) {}
// check(1);
check("12");
check("0");
