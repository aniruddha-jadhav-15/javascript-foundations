/*
JavaScript Async Foundations
Topic: Call Stack

These exercises demonstrate how JavaScript executes
functions using the call stack (synchronous execution).
*/

// Problem 1

console.log("Start");

function greet() {
  console.log("Hello");
}

greet();

console.log("End");

/*
Output:
Start
Hello
End
*/

// Problem 2

function a() {
  console.log("A");
}

function b() {
  console.log("B");
  a();
}

b();

/*
Output:
B
A
*/

// Problem 3

function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
}

console.log("Start");
first();
console.log("Finish");

/*
Output:
Start
First
Second
Finish
*/

// Problem 4

function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
  three();
}

function three() {
  console.log("Three");
}

one();
console.log("Done");

/*
Output:
One
Two
Three
Done
*/

// Problem 5

function a() {
  console.log("A start");
  b();
  console.log("A end");
}

function b() {
  console.log("B");
}

console.log("Start");
a();
console.log("End");

/*
Output:
Start
A start
B
A end
End
*/
