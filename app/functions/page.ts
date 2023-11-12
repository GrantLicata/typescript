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

// Both the input and output can be typed
let multiple = (num: number): number => {
  return num * 2;
};

let sum = (num1: number, num2: number) => {
  return num1 + num2;
};
