/*
Topic: Microtask vs Macrotask Priority

Execution order:
1. Call Stack
2. Microtask Queue (Promises)
3. Macrotask Queue (setTimeout)
*/

// Problem 1

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

/*
Output:
1
4
3
2
*/

// Problem 2

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Output:
Start
End
Promise
Timeout
*/

// Problem 3

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

/*
Output:
1
5
3
4
2
*/
