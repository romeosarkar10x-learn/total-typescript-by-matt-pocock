type Example = {
    a: string;
    b: number;
    c: boolean;
    d: {
        e: number;
        f: {
            g: boolean;
            h: Date;
        };
        i: { j: string; k: object }[];
        l: { m: { n: string; o: { p: number }; q: boolean } };
    };
    r: {
        s: [number, string, boolean];
        t: [{ u: number; v: { w: [boolean] } }, { x: { y: [{ z: [[string, number], [number, string]] }] } }];
    };
};

// type DeepPartial<T> = T extends object ? : T extends [];

// type PartialExample = DeepPartial<Example>;

type IsSameType<T, U> = (<X>() => X extends T ? 1 : 2) extends (<Y>() => Y extends U ? 1 : 2) ? true : false;

type Test<T> = {
    [Key in keyof T]: IsSameType<Partial<T[Key]>, T[Key]> extends true ? T[Key] : Partial<Test<T[Key]>>;
};

// type X = Test<[number, boolean]>;
// type Y = Test<{ "0": number; "1": boolean }>;
// type Z = keyof [number, boolean];

// type Tx<T> = keyof T;
// type A = Tx<[number, string]>;

// type B = [] extends [boolean] ? true : false;
// type C = [true] extends [boolean] ? true : false;

// type XX = Test<number>;
// type XK = Partial<[number, string]>;
type Answer = Test<Example>;
type A = Test<[boolean, string, number]>;
type B = Partial<[boolean, string, number]>;
type X = Test<Partial<boolean>>;

type XX = IsSameType<[boolean], Partial<[boolean]>>;

// type Z = number?;
