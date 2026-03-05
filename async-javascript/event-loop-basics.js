// JavaScript Async Behavior
// Understanding execution order using the Event Loop

// Practice 1

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// Practice 2

console.log("Start");

setTimeout(() => {
  console.log("Timer 1");
}, 1000);

setTimeout(() => {
  console.log("Timer 2");
}, 0);

console.log("End");

// Practice 3

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 1000);

console.log("4");
