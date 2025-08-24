type Path = "home/john/desktop/temp/notes.txt";


type Split<T> = T extends `${string}/${string}` ?  : T;

// type SplitPath = 
