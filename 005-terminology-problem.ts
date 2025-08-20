/* this is a discriminated union */
type A = { type: "a"; a: string } | { type: "b"; b: string } | { type: "c"; c: string };

/* this is an union */
type B = "a" | "b" | "c";

/* this is an enum */
enum C {
    A = "a",
    B = "b",
    C = "c",
}
