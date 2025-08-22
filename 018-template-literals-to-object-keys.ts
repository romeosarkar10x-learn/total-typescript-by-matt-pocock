type TemplateLiteralKey = `${"user" | "post" | "comment"}${"ID" | "Name"}`;

type ObjectOfKeys = {
    [K in TemplateLiteralKey]: string;
};

type ObjectOfKeys2 = Record<TemplateLiteralKey, string>;
