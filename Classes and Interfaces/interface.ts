interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: "Pravin",
    age: 24,
    greet: (phrase: string) => {
        phrase + " " + name;
    },
};

user1.greet("Hiii");
