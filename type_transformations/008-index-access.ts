const fakeDataDefaults = {
    String: "Default string",
    Int: 1,
    Float: 1.12,
    Boolean: true,
    ID: "id",
};

type StringType = typeof fakeDataDefaults["String"];
type Int = typeof fakeDataDefaults["Int"];
type Float = typeof fakeDataDefaults["Float"];
type Boolean = typeof fakeDataDefaults["Boolean"];
type ID = typeof fakeDataDefaults["ID"];
