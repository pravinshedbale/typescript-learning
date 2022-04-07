const role = [1, "student"];

role.push("admin"); // This should not be done because we want only 2 members in role i.e id and role name

//To overcome this we can use tuple
let roleTuple: [number, string]; //this will only have two elements with specified type
roleTuple = [1, "Pravin"];
