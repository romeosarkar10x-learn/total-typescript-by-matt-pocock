function returnWhatIPassIn<T>(t: T): T {
    return t;
}

const one = returnWhatIPassIn(1);
const hello = returnWhatIPassIn("hello");
