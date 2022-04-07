enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
} // Automatically generates the number and associate with members : start with 0

const person = {
    name: "Pravin",
    age: 23,
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log(`${person.name} is Admin`);
}
