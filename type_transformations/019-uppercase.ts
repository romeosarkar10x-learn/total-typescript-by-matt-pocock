type Event = "login" | "logout" | "sign-up";

type ObjectOfKeys = Record<Uppercase<Event>, string>;
