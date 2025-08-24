const fruits = ["apple", "banana", "orange", "pomegranate", "kiwi"] as const;

type AppleBanana = typeof fruits["0" | 1];
type Fruit = typeof fruits[number];

type X = typeof fruits[never];
// type Y = typeof fruits[void];
