interface UserInfo {
    firstName: string;
    lastName: string;
    age: number;
    gender: "male" | "female" | "none";
    dateOfBirth: Date;
    gmail: `${string}@gmail.com`;
}

type AttributeGetters<T> = {
    [Attribute in keyof T]: () => T[Attribute];
};

type UserInfoAttributeGetters = AttributeGetters<UserInfo>;
