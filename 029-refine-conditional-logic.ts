type YouSayHelloAndISayGoodBye<T> = T extends "hello" | "goodbye" ? T extends "hello" ? "goodbye" : "hello" : never;

type A = YouSayHelloAndISayGoodBye<"hello">;
type B = YouSayHelloAndISayGoodBye<"goodbye">;
type C = YouSayHelloAndISayGoodBye<"gadha">;
type D = YouSayHelloAndISayGoodBye<1>;
