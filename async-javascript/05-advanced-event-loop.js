/*
Topic: Advanced Event Loop Behavior

Combining promises and timers to understand
microtask and macrotask scheduling.
*/

// Problem 1

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");

  setTimeout(() => {
    console.log("4");
  }, 0);
});

console.log("5");

/*
Output:
1
5
3
2
4
*/

// Problem 2

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

setTimeout(() => {
  console.log("3");
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

/*
Output:
1
5
2
4
3
*/

// Problem 3

console.log("Start");

setTimeout(() => {
  console.log("Timeout1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise1");

  setTimeout(() => {
    console.log("Timeout2");
  }, 0);
});

Promise.resolve().then(() => {
  console.log("Promise2");
});

console.log("End");

/*
Output:
Start
End
Promise1
Promise2
Timeout1
Timeout2
*/
