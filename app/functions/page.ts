//? FUNCTIONS

// Functions can't be changed into other types
let sayHi = () => {
  console.log("Hi, welcome to this section");
};
sayHi = "hi";

// Functions can be explicitly typed following the arguments
let funcReturnString = (): string => {
  console.log("Hi");
  return "This is a string";
};
