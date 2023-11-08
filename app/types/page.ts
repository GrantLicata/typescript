//? BASIC TYPES
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

//? ARRAYS
// The type of the array above is implicitly typed as string
let names = ["john", "jane", "cameron"];

// An array of strings is explicitly typed
let namesExplicitlyTyped: string[];

// An error occurs when attempting to incorporate a number
names.push("mike");
names.push(9);

let numbers = [11, 22, 33];
numbers.push(44);

// Union arrays can be specified using "()[]"
let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [24, 35, "Ninety two", 129];

//? OBJECTS
// Objects are implicitly typed upon generation
let user = {
  username: "john",
  age: 22,
  isAdmin: false,
};

user.username = "jane";
user.username = 45;

// Objects can be explicitly typed
let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

// When objects are explicitly declared they ust follow the content specifications. New object properties can not be included.
userObj = {
  username: "john",
  age: 23,
  isAdmin: true,
  phone: 1231231121,
};

// Object properties can be stated as optional using "?"
let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

//? ANY

// Variables with no initial value or specified type are considered a type of "any"
let testAny;

testAny = 12;
testAny = "John";
testAny = false;
testAny = {};
testAny = [];
