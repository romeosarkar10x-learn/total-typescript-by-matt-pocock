type YouSayHelloAndISayGoodBye<T extends "hello" | "goodbye"> = T extends "hello" ? "goodbye" : "hello";

type A = YouSayHelloAndISayGoodBye<"hello">;
type B = YouSayHelloAndISayGoodBye<"goodbye">;
