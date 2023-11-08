let variable = "hello";

let age = 18;

// Types are implicit until explicitly assigned by ":"

let ageWithType: number = 4;

let testString: string = "This is a string";

let testBoolean: boolean = true;

// Union types
let testStringOrNumber: string | number;
testStringOrNumber = 4;
testStringOrNumber = "Four";

// ARRAY
let names = ["john", "jane", "cameron"];
// The type of the array above is implicitly typed as string

let namesExplicitlyTyped: string[];
// An array of strings is explicitly typed

names.push("mike");
names.push(9);
// An error occurs when attempting to incorporate a number

let numbers = [11, 22, 33];
numbers.push(44);

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [24, 35, "Ninety two", 129];
// Union arrays can be specified using "()[]"

//OBJECTS

let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};
// Objects are implicitly typed upon generation

user.username = "jane";
user.username = 45;
