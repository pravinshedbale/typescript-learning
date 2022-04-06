var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // Automatically generates the number and associate with members : start with 0
var person = {
    name: "Pravin",
    age: 23,
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("".concat(person.name, " is Admin"));
}
